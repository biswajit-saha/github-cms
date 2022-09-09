import type { RequestHandler } from './$types';
import cookie from 'cookie';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = ({ request }) => {
	const token = cookie.parse(request.headers.get('cookie') || '').token || '';

	return json({ token: token });
};
