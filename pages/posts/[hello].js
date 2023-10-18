import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { hello } = router.query
  return <p>{hello}</p>
}