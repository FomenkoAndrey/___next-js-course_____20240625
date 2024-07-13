import { posts } from '@/app/posts/data'
import { redirect } from 'next/navigation'

type ContextProps = {
  params: {
    id: string
  }
}

// ! GET
export async function GET(request: Request, context: ContextProps) {
  const { id } = context.params
  const post = posts.find((post) => post.id === +id)

  if (!posts.some((post) => post.id === +id)) {
    redirect('/posts')
  }

  return Response.json(post)
}

// ! PUT
export async function PUT(request: Request, context: ContextProps) {
  const { id } = context.params
  const newData = await request.json()

  console.log(newData)

  const index = posts.findIndex((post) => post.id === +id)

  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Post not found' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 404
    })
  }

  posts[index] = { id: +id, ...newData }

  return new Response(JSON.stringify(posts[index]), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  })
}

// ! PATCH
export async function PATCH(request: Request, context: ContextProps) {
  const { id } = context.params
  const updates = await request.json()

  console.log(updates)

  const index = posts.findIndex((post) => post.id === +id)

  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Post not found' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 404
    })
  }

  posts[index] = { ...posts[index], ...updates }

  return new Response(JSON.stringify(posts[index]), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  })
}

// ! DELETE
export async function DELETE(request: Request, context: ContextProps) {
  const { id } = context.params
  const index = posts.findIndex((post) => post.id === +id)

  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Post not found' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 404
    })
  }

  posts.splice(index, 1)

  return new Response(JSON.stringify({ message: `Post with id: ${id} deleted successfully` }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  })
}
