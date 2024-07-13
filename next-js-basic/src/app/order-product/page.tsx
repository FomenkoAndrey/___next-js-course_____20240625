'use client'

import { useRouter } from 'next/navigation'

export default function OrderProduct() {
  const router = useRouter()

  const orderProduct = () => {
    console.log('Ordering product')
    router.push('/')
  }

  return (
    <>
      <h1 className="header">Order Product</h1>
      <button onClick={orderProduct} className="button">
        Place order
      </button>
    </>
  )
}
