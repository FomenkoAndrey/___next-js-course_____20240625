import { ProductInterface } from '@/types/Product.interface'
import { fetchProducts } from '@/lib/fetchProducts'
import Link from 'next/link'

export default async function ProductsPage() {
  const products: ProductInterface[] = await fetchProducts()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {products.map((product) => (
        <Link href={`/products/${product._id}`} key={product._id}>
          <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600 max-w-500">
            <div className="flex flex-col space-y-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
            </div>
            <div className="flex flex-col space-y-4 items-end">
              <p>{product.price}</p>
              <p>{product.category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
