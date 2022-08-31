import type { RequestHandler } from './$types';
import * as cookie from 'cookie';

const target = 'https://github.com/login/oauth/authorize';
const clientId = import.meta.env.VITE_CLIENT_ID;

export const GET: RequestHandler = ({ request }) => {
	return new Response('Redirect', {
		status: 302,
		headers: {
			Location: '/',
			'set-cookie': cookie.serialize('token', '', {
                            path: '/',
                            httpOnly: true
                        })
		}
	});
};