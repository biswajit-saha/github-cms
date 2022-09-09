import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import cookie from 'cookie';
import { env } from '$env/dynamic/private';
import getConfig from '$lib/githelper/getConfig';

export const load: PageServerLoad = async ({ locals, request }) => {
	if (!locals.user || locals.user === '') {
		throw redirect(307, '/login');
	}

	const token = cookie.parse(request.headers.get('cookie') || '').token || '';
	const config = getConfig(token, env.GITHUB_OWNER, env.GITHUB_REPO);

	return {
		user: locals.user,
		config: config
	};
};
