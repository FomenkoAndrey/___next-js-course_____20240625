import { delay } from '@/utils/delay'

const PopularProducts = async () => {
  await delay(4000)
  return <h2 className="header2">Popular Products</h2>
}

export default PopularProducts
