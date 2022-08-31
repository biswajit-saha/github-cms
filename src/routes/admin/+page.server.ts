import type {PageServerLoad} from './$types'
import * as cookie from 'cookie';
import { redirect } from '@sveltejs/kit';

export const load:PageServerLoad = async (params) => {

    const cookies = cookie.parse(params.request.headers.get('cookie') || '')
    if(!params.locals.token || params.locals.token ==='') {
        throw redirect(302, '/')
    }
}