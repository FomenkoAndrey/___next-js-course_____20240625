import Navbar from '@/components/Navbar'
import RecentProducts from '@/components/RecentProducts'
import PopularProducts from '@/components/PopularProducts'
import { Suspense } from 'react'
import Loading from '@/components/Loading'

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <h1 className="header">Products Page</h1>
      <Suspense fallback={<Loading>Loading recent products...</Loading>}>
        <RecentProducts />
      </Suspense>
      <Suspense fallback={<Loading>Loading popular products...</Loading>}>
        <PopularProducts />
      </Suspense>
    </>
  )
}
