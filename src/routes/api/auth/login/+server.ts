import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import cookie from 'cookie';

const ghAuthURL = 'https://github.com/login/oauth/authorize';
const clientId = env.GITHUB_CLIENT_ID;

export const GET: RequestHandler = ({ locals }) => {
	if (locals.user && locals.user !== '') {
		throw redirect(302, '/');
	}

	const csrfState = crypto.randomUUID();
	const csrfCookie = cookie.serialize('state', csrfState, {
		maxAge: 24 * 60 * 60,
		httpOnly: true
	});
	return new Response(null, {
		status: 302,
		headers: {
			'Set-Cookie': csrfCookie,
			Location: `${ghAuthURL}?client_id=${clientId}&state=${csrfState}&scope=repo`
		}
	});
};
