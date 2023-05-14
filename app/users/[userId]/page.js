import getUser from "/lib/getUser"
import getUserPosts from "/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"




// export async function generateMetadata({ params: { userId } }: Params){
//     const userData: Promise<User> = getUser(userId)
//     const user: User = await userData

//     return {
//         title: user.name,
//         description: `This is the page of ${user.name}`
//     }

// }

export const metadata = {
    title: 'Users',
  }

export default async function UserPage({params:{userId}}) {
    const userData = getUser(userId)
    const userPostsData = getUserPosts(userId)

     //Autre façon d'appeler les données qui recharge différemment la page:::
    // If not progressively rendering with Suspense, use Promise.all
    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData
    console.log("Hello");
    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )
}