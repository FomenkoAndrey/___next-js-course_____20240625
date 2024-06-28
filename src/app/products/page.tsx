import Link from 'next/link'

export default function ProductsList() {
  const productId = 5
  return (
    <div>
      <Link href="/" className="menu-link">
        Home
      </Link>
      <h1>Products List Page</h1>
      <ul>
        <li>
          <h2>
            <Link href="/products/1">Product 1</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="/products/2">Product 2</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="/products/3">Product 3</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="/products/4" replace>
              Product 4
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href={`/products/${productId}`} replace>
              Product {productId}
            </Link>
          </h2>
        </li>
      </ul>
    </div>
  )
}
