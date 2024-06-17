import { redirect } from "@sveltejs/kit";


export const load = async({parent}) => {
    const user = await parent();
    redirect(307, user ? `/profile/${user.login}` : "/login")
}