export const fetchProducts = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const response = await fetch(`${baseUrl}/products/api`, {
    next: {
      revalidate: 30
    }
  })
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}
