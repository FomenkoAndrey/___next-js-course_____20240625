import { NextResponse } from 'next/server'
import clientPromise, { dbName } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

type ContextProps = {
  params: {
    productId: string
  }
}

export async function GET(_request: Request, context: ContextProps) {
  const { productId } = context.params

  try {
    const client = await clientPromise
    const db = client.db(dbName)

    const productObjectId = new ObjectId(productId)
    console.log(productObjectId)
    const product = await db.collection('products').findOne({ _id: productObjectId })

    console.log(product)
    if (!product) {
      return new NextResponse('Product Not Found', { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error(error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
