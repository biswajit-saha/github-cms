import type { RequestHandler } from './$types';

const target = 'https://github.com/login/oauth/authorize';
const clientId = import.meta.env.VITE_CLIENT_ID;

export const GET: RequestHandler = ({ request }) => {
	const sessionId = '1234';
	return Response.redirect(`${target}?client_id=${clientId}&state=${sessionId}&scope=repo`, 302);
};
