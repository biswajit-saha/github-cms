import type { Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	
	// do some stuff before
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.token = cookies.token || '';

	const response = await resolve(event);
	const date = new Date(Date.now() + 86400e3)

	response.headers.set(
		'set-cookie',
		cookie.serialize('token', event.locals.token, {
			path: '/',
			httpOnly: true,
			expires: date
		})
	);

	return response;
};