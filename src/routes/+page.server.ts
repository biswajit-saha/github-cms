import * as cookie from 'cookie';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user || locals.user === '') {
		throw redirect(307, '/login');
	}
};
