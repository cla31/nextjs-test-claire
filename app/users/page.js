import getAllUsers from '/lib/getAllUsers'
import Link from "next/link"

// const getAllUsers = async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log("fetch ok");

//     if (!res.ok) throw new Error('failed to fetch data')

//     return res.json()
// }

export default async function UsersPage() {
    const users = await getAllUsers()
   

    console.log("log hello",'Hello') // Did you find where this appears?
    console.log("log users",users) // Did you find where this appears?

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )

    return content
}
