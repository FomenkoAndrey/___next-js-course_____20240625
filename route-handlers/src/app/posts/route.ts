import { Post, posts } from '@/app/posts/data'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const sortQuery = searchParams.get('sort')

  if (sortQuery) {
    const isDescending = sortQuery.startsWith('-')
    const sortField = isDescending ? sortQuery.substring(1) : sortQuery

    posts.sort((a: Post, b: Post) => {
      const fieldA = a[sortField as keyof Post]
      const fieldB = b[sortField as keyof Post]

      if (typeof fieldA === 'number' && typeof fieldB === 'number') {
        return isDescending ? fieldB - fieldA : fieldA - fieldB
      }

      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return isDescending ? fieldB.localeCompare(fieldA) : fieldA.localeCompare(fieldB)
      }

      return 0
    })
  }

  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function POST(request: Request) {
  const post = await request.json()
  const newPost = { id: posts.length + 1, ...post }

  posts.push(newPost)

  return new Response(JSON.stringify(newPost), {
    headers: { 'Content-Type': 'application/json' },
    status: 201
  })
}
