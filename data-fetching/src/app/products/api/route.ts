import clientPromise, { dbName } from '@/lib/mongodb'
import { NextResponse } from 'next/server'
import { products } from '@/data/products'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db(dbName)

    const products = await db.collection('products').find({}).toArray()

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST() {
  try {
    const client = await clientPromise
    const db = client.db(dbName)

    await db.collection('products').insertMany(products)

    return new NextResponse('Products added successfully', { status: 201 })
  } catch (error) {
    console.error('Error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
