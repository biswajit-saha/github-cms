import type { Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';


export const handle: Handle = async ({event, resolve}) => {
    // do some stuff before
    const cookies = cookie.parse(event.request.headers.get('cookie') || '')
    event.locals.token = cookies.token || ''

    const response = await resolve(event)

    response.headers.set('set-cookie', cookie.serialize('token', event.locals.token, {
        path: '/',
        httpOnly: true
    }))

    return response;
}