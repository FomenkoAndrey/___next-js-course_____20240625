'use client'

import { FC, useEffect, useState } from 'react'
import { ProductInterface } from '@/types/Product.interface'
import Link from 'next/link'
import Loading from '@/components/Loading'

const ProductsPage: FC = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products/api')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        setError((error as Error).message)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {products.map((product: ProductInterface) => (
        <Link href={`/products/${product._id}`} key={product.name}>
          <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600 max-w-500">
            <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
            </div>
            <div className="flex flex-col space-y-4 items-end">
              <div className="text-md">${product.price}</div>
              <div className="text-md">{product.category}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductsPage
