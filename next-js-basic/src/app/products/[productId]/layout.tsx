'use client'

import ProductFeatures from '@/app/products/[productId]/ProductFeatures'
import RelevantProducts from '@/app/products/[productId]/RelevantProducts'

function randomNum(max: number) {
  return Math.floor(Math.random() * max)
}

export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  const random = randomNum(2)

  if (random) {
    throw new Error('Random error message')
  }

  return (
    <>
      {children}
      <ProductFeatures />
      <RelevantProducts />
    </>
  )
}
