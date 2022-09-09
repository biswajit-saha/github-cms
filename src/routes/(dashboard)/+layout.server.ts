import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.user || locals.user === '') {
		throw redirect(307, '/login');
	}

	return {
		user: locals.user
	};
};
