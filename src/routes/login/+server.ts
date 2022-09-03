import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const target = 'https://github.com/login/oauth/authorize';
const clientId = import.meta.env.VITE_CLIENT_ID;

export const GET: RequestHandler = ({ locals }) => {
	
	// if (locals.token) {
	// 	throw redirect(302, '/');
	// }

	console.log('login', locals)
	const sessionId = crypto.randomUUID();
	return new Response('Redirect', {
		status: 302,
		headers: {
			Location: `${target}?client_id=${clientId}&state=${sessionId}&scope=repo`
		}
	});
};
