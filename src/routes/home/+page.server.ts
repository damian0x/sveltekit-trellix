import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { createBoard, deleteBoard, getHomeData } from './queries';
import { INTENTS } from '$lib/types';
import { badRequest } from '../../http/bad-request';

export const load: PageServerLoad = async ({ cookies, request }) => {
	const userId = '82459906-e1d9-4695-89a3-546d64f81523';

	console.log('userId', userId);

	// if (!userId) {
	// 	cookies.set('', { maxAge: 0 }, { path: '/login' });
	// 	throw redirect(302, '/login');
	// }
	const boards = await getHomeData(userId);
	return { boards };
};

export const actions = {
	default: async ({ cookies, request }) => {
		const accountId = await '82459906-e1d9-4695-89a3-546d64f81523';
		const formData = await request.formData();
		const intent = String(formData.get('intent'));
		switch (intent) {
			case INTENTS.createBoard: {
				const name = String(formData.get('name') || '');
				const color = String(formData.get('color') || '');
				if (!name) throw badRequest('Bad request');
				const board = await createBoard(accountId, name, color);
				return redirect(302, `/board/${board.id}`);
			}
			case INTENTS.deleteBoard: {
				const boardId = formData.get('boardId');
				if (!boardId) throw badRequest('Missing boardId');
				await deleteBoard(Number(boardId), accountId);
				return { ok: true };
			}
			default: {
				throw badRequest(`Unknown intent: ${intent}`);
			}
		}
	}
} satisfies Actions;
