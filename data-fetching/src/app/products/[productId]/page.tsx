import { fetchProductById } from '@/lib/fetchProductById'

export const fetchCache = 'default-cache'

// export const fetchCache = 'force-no-store'

interface ProductDetailsInterface {
  params: {
    productId: string
  }
}

export default async function ProductDetails({ params: { productId } }: ProductDetailsInterface) {
  // const cookieStore = cookies()
  // cookieStore.get('theme')

  const product = await fetchProductById(productId)
  console.log(product)

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-white shadow rounded-lg p-6 text-gray-600">
        <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
        <p className="my-4 text-sm">{product._id}</p>
        <p className="text-lg mb-2">
          <strong>Description:</strong> {product.description}
        </p>
        <p className="text-lg mb-2">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="text-lg">
          <strong>Price:</strong> ${product.price}
        </p>
      </div>
    </div>
  )
}
