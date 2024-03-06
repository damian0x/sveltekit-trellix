import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { validate } from './validate';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = String(data.get('email') || '');
		const password = String(data.get('password') || '');

		console.log({ email, password });

		const errors = validate(email, password);
		if (errors) {
			return fail(400, { errors, ok: false });
		}

		return redirect(302, '/home');
	}
} satisfies Actions;
