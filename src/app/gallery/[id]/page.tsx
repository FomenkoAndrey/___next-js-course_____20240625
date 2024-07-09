import Image from 'next/image'
import { CyberpunkImage, cyberpunkImages } from '@/app/gallery/cyberpunkImages'

type ImagePageProps = {
  params: {
    id: string
  }
}

export default function ImagePage({ params: { id } }: ImagePageProps) {
  const photo: CyberpunkImage | undefined = cyberpunkImages.find((photo) => photo.id === id)

  if (!photo) {
    return null
  }

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.title}</h1>
        </div>
        <Image src={photo.src} alt={photo.title} className="w-full object-cover aspect-square" />
        <div className="bg-white py-4">
          <h3>{photo.title}</h3>
        </div>
      </div>
    </div>
  )
}
