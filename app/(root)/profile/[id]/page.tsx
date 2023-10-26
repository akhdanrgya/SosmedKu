import { currentUser } from "@clerk/nextjs"
import {redirect} from 'next/navigation'
import { fetchUser } from "@/lib/actions/user.action"
import ProfileHeader from "@/components/shared/ProfileHeader"

async function Page({ params } : { params : { id: string}}) {
    const user = await currentUser()

    if(!user) return null

    const userInfo = await fetchUser(user.id)

    if(!userInfo?.onboarded) redirect('/onboarding')

    
    return(
        <section>
            <ProfileHeader
            accountId ={userInfo.id}
            authUserId = {user.id}
            name={userInfo.name}
            username={userInfo.username}
            />
        </section>
    )
}

export default Page