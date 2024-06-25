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
      <button
        onClick={orderProduct}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Place order
      </button>
    </>
  )
}
