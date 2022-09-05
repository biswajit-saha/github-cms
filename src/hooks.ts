import type { Handle } from '@sveltejs/kit';
import cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const user = cookie.parse(event.request.headers.get('cookie') || '').user || '';
	if (user !== '') {
		event.locals.user = JSON.parse(user);
	}
	const response = await resolve(event);

	return response;
};
