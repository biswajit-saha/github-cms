import type { PageServerLoad } from './$types';
import * as cookie from 'cookie';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (request) => {
	let authenticated = false;

	const cookies = cookie.parse(request.request.headers.get('cookie') || '');

	if (!request.locals.token || request.locals.token == '') {
		authenticated = false;
	} else {
		authenticated = true;
	}

	return {
		authenticated
	};
};
