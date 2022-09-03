import { redirect } from '@sveltejs/kit';
import type { pageServerLoad } from './$types';

export const load: pageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/');
	}
};
