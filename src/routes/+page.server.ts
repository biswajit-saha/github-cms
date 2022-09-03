import type { pageServerLoad } from './$types';

import * as cookie from 'cookie';
import { redirect } from '@sveltejs/kit';

export const load: pageServerLoad = async ({ locals }) => {
	let authenticated = false;

	if (!locals.token) {
		authenticated = false;
	} else {
		authenticated = true;
	}

	return {
		authenticated
	};
};
