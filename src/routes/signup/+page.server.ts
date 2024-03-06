import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { validate } from './validate';
import { createAccount } from './queries';
import { setAuthOnResponse } from '../../auth/auth';

export const actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();

		const email = String(formData.get('email') || '');
		const password = String(formData.get('password') || '');

		const errors = await validate(email, password);
		if (errors) {
			return fail(400, { errors, ok: false });
		}

		const user = await createAccount(email, password);
		return setAuthOnResponse(cookies, redirect(302, '/home'), user.id);
	}
} satisfies Actions;
