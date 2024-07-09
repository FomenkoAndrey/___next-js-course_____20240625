import { CyberpunkImage, cyberpunkImages } from '@/app/gallery/cyberpunkImages'
import Image from 'next/image'
import Modal from '@/components/modal'

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
    <Modal>
      <Image src={photo.src} alt={photo.title} className="w-full object-cover aspect-square" />
      <div className="bg-white py-4">
        <h3 className="text-xl font-semibold px-4">{photo.title}</h3>
      </div>
    </Modal>
  )
}
