import getAllUsers from '/lib/getAllUsers'
import Link from "next/link"
import styles from '../../styles/user.module.scss'


export default async function UsersPage() {
    const users = await getAllUsers()
   

    // console.log("log hello",'Hello')
    // console.log("log users",users) 

    const content = (
        <section className={styles.highlightscss}>
            <h1>Users Page</h1>
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
