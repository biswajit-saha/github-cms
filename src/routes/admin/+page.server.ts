import type {PageServerLoad} from './$types'

export const load:PageServerLoad = async (params) => {
    console.log("admin", params.locals.token)
}