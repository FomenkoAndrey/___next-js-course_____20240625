export const fetchProductById = async (productId: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const response = await fetch(`${baseUrl}/products/${productId}/api`, {
    cache: 'no-store'
  })
  if (!response.ok) {
    throw new Error('Failed to fetch product')
  }
  return response.json()
}
