import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

let secret = process.env.COOKIE_SECRET || 'default';
if (secret === 'default') {
	console.warn(
		'🚨 No COOKIE_SECRET environment variable set, using default. The app is insecure in production.'
	);
	secret = 'default-secret';
}

export async function getAuthFromRequest(cookies, request: Request): Promise<string | null> {
	cookies.set('auth', {
		secrets: [secret],
		// 30 days
		maxAge: 30 * 24 * 60 * 60,
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax'
	});

	const userId = await cookies.parse(request.headers.get('Cookie'));
	return userId ?? null;
}

export async function setAuthOnResponse(
	cookies,
	response: Response,
	userId: string
): Promise<Response> {
	const header = await cookies.serialize(userId);
	response.headers.append('Set-Cookie', header);
	return response;
}

export async function redirectIfLoggedInLoader({ cookies, request }: PageServerLoad) {
	const userId = await getAuthFromRequest(cookies, request);
	if (userId) {
		throw redirect(302, '/home');
	}
	return null;
}

export async function requireAuthCookie(cookies, request: Request) {
	const userId = await getAuthFromRequest(cookies, request);

	if (!userId) {
		cookies.set('', { maxAge: 0 }, { path: '/login' });
		throw redirect(302, '/login');
	}
	return userId;
}
