interface GuidesProps {
  params: {
    slug: string[]
  }
}

export default function Guides({ params }: GuidesProps) {
  const { slug } = params
  const formatedSlug = slug?.join(' / ')
  return <h1>Guides / {formatedSlug}</h1>
}
