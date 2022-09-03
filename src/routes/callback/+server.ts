import type { RequestHandler } from './$types';
import * as cookie from 'cookie';
import { redirect } from '@sveltejs/kit';

const tokenUrl = 'https://github.com/login/oauth/access_token';
const clientId = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

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
		.then((r) => {
			console.log(r)
			return r.access_token
		});

	request.locals.token = token;
	console.log('callback', request.locals.token)
	const date = new Date(Date.now() + 86400e3)

	return new Response('Redirect', {
		status: 302,
		headers: {
			Location: '/',
			// 'set-cookie': cookie.serialize('token', 'aaa' + request.locals.token, {
			// 	path: '/',
			// 	httpOnly: true,
			// 	expires: date
			// })
		}
	});
};