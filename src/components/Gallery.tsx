import { Image as ImageType } from "@/types"
import ImageCard from "./ImageCard"

export default function Gallery({ images }: { images: ImageType[] }) {
  return (
    <div>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  )
}
