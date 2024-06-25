import ProductFeatures from '@/app/products/[productId]/ProductFeatures'
import RelevantProducts from '@/app/products/[productId]/RelevantProducts'

export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProductFeatures />
      <RelevantProducts />
    </>
  )
}
