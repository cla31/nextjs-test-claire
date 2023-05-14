import Link from 'next/link'
import Image from 'next/image'
// import styles from './page.module.css'
import styles from '../styles/home.module.scss'


export default function Home() {
  return (
    <main className={styles.highlightscss}>
      <h1>Home Page</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  )
}
