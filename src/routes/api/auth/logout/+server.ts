import type { RequestHandler } from './$types';
import * as cookie from 'cookie';

export const GET: RequestHandler = ({ locals }) => {
	locals.user = '';

	const oldDate = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
	const invalidAccessToken = cookie.serialize('token', '', {
		path: '/',
		httpOnly: true,
		expires: oldDate
	});
	const invalidUser = cookie.serialize('user', '', {
		path: '/',
		httpOnly: true,
		expires: oldDate
	});

	const headers = new Headers();
	headers.append('Set-Cookie', invalidAccessToken);
	headers.append('Set-Cookie', invalidUser);
	headers.append('location', '/');

	return new Response(null, {
		status: 302,
		headers
	});
};
