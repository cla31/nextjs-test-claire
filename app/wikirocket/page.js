import Link from 'next/link'
import Navbar from './components/Navbar'


export default function Wikirocket() {
  return (
    <main>
      <Navbar />
      <h1>Wikirocket Page</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  )
}