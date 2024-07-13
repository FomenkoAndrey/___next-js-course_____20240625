import { Metadata } from 'next'

interface ProductDetailsProps {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({ params }: ProductDetailsProps): Promise<Metadata> => {
  const { productId } = params

  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Product ${productId}`)
    }, 100)
  })

  return {
    title: `Async ${title}`,
    description: `Async ${title} description`
  }
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  const { productId } = params

  return <h1>Product Details Page for {productId}</h1>
}

// ! Sync Dynamic Metadata
// export const generateMetadata = ({ params }: ProductDetailsProps): Metadata => {
//   const { productId } = params
//
//   return {
//     title: `Product ${productId}`,
//     description: `Product ${productId} Details page description`
//   }
// }
