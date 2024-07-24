import Navbar from '@/components/Navbar'
import { serverUtils } from '@/utils/serverUtils'

export default function ServerRoutePage() {
  const result = serverUtils()

  return (
    <>
      <Navbar />
      <h1 className="header">Server Route Page</h1>
      <h2 className="header2">{result}</h2>
    </>
  )
}
