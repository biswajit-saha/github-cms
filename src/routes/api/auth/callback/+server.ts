import type { RequestHandler } from './$types';
import cookie from 'cookie';
import { error } from '@sveltejs/kit';
import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';

const tokenURL = 'https://github.com/login/oauth/access_token';
const userURL = 'https://api.github.com/user';

const clientId = CLIENT_ID;
const secret = CLIENT_SECRET;

export const GET: RequestHandler = async function ({ url, request }) {
	const code = url.searchParams.get('code') as string;
	const state = url.searchParams.get('state') as string;

	// match csrf token
	const csrfCookie = cookie.parse(request.headers.get('cookie') || '').state || '';

	if (state !== csrfCookie) {
		throw error(403, 'State mismatched.');
	}

	const token = await getAccessToken(code);
	const user = await getUser(token);

	const tokenCookie = cookie.serialize('token', token, {
		path: '/',
		httpOnly: true
	});
	const userCookie = cookie.serialize('user', user.login || '', {
		path: '/',
		httpOnly: true
	});

	const headers = new Headers();
	headers.append('location', '/');
	headers.append('set-cookie', tokenCookie);
	headers.append('set-cookie', userCookie);

	return new Response(null, {
		status: 302,
		headers
	});
};

// function to get access token
async function getAccessToken(code: string) {
	const tokenResponse = await fetch(tokenURL, {
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
	});
	const accessToken = await tokenResponse.json();
	return accessToken.access_token;
}

// Function to get user
async function getUser(accessToken: string) {
	const response = await fetch(userURL, {
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	});
	return response.json();
}
