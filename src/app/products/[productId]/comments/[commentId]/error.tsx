'use client'

export default function Error({ error }: { error: Error }) {
  return <h1 className="text-3xl font-bold my-5">{error.message}</h1>
}
