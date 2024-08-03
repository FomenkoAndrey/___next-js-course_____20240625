import { MongoClient } from 'mongodb'

const uri: string = process.env.MONGODB_URI as string
const dbName: string = process.env.DB_NAME as string
let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

if (!dbName) {
  throw new Error('Please define the DB_NAME environment variable inside .env.local')
}

if (process.env.NODE_ENV === 'development') {
  const globalWithMongoClientPromise = globalThis as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>
  }

  if (!globalWithMongoClientPromise._mongoClientPromise) {
    client = new MongoClient(uri)
    globalWithMongoClientPromise._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongoClientPromise._mongoClientPromise
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export default clientPromise
export { dbName }
