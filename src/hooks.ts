import type { Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';


export const handle: Handle = async ({event, resolve}) => {
    // do some stuff before
    const cookies = cookie.parse(event.request.headers.get('cookie') || '')
    event.locals.token = cookies['token'] || ''
    
    const response = await resolve(event)

    // do some stuff after
    if (!cookies['user']) {
      // if this is the first time the user has visited this app,
      // set a cookie so that we recognise them when they return
      // response.headers.set(
      //   'set-cookie',
      //   cookie.serialize('user', event.locals.user, {
      //     path: '/',
      //     httpOnly: true
      //   })
      // );
    }

    // return response
 
  return response;
}