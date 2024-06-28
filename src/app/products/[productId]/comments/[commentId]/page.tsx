import { notFound } from 'next/navigation'

interface CommentDetailsProps {
  params: {
    productId: string
    commentId: string
  }
}

function randomNum(max: number) {
  return Math.floor(Math.random() * max)
}

export default function CommentDetails({ params }: CommentDetailsProps) {
  const { productId, commentId } = params
  const random = randomNum(2)

  if (random) {
    try {
      throw new Error('Random error message')
    } catch (error) {
      console.error((error as Error).message)
    }
  }

  if (+commentId > 100) {
    notFound()
  }

  return (
    <h1>
      Comment {commentId} for product {productId}
    </h1>
  )
}
