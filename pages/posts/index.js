import { Inter } from 'next/font/google'
import Navbar from '@/components/Navber'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
      <code>/posts/index.js 정다훈 201930325</code>
    </>
  )
}
