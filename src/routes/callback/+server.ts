import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const tokenUrl = 'https://github.com/login/oauth/access_token';
const clientId = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

// console.log(clientId, secret)

export const GET: RequestHandler = async function (request) {
	// get code from the url
	const code = request.url.searchParams.get('code');

	// get the access token
	const token = await fetch(tokenUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			client_id: clientId,
			client_secret: secret,
			code
		})
	})
		.then((res) => res.json())
		.then((r) => r.access_token);

	console.log(token);

	const access_token = token;

	// get user data

	const user = await fetch('https://api.github.com/user', {
		headers: {
			Accept: 'application/vnd.github+json',
			Authorization: `bearer ${token}`
		}
	}).then((res) => res.json());

	// request.locals.user = user.login

	// return Response.redirect(request.url.origin, 302)
	return new Response('Redirect', {
		status: 302,
		headers: {
			Location: '/',
			'set-cookie': `token=${token}; SameSite=Strict;`
		}
	});
	// return json(user)
};
