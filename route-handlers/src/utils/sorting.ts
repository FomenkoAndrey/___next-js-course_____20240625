import { Post } from '@/app/posts/data'

export function sortPosts(posts: Post[], sortQuery: string) {
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

export function filterPosts(posts: Post[], query: string) {
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase())
  )
}
