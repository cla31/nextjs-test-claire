import Link from 'next/link'
import styles from '../styles/home.module.scss'


export default function Home() {
  return (
    <main className={styles.highlightscss}>
      <h1>Home Page</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
      <p>
        <Link href="/wikirocket">Wikirocket</Link>
      </p>
    </main>
  )
}
