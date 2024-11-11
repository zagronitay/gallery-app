import { Image as ImageType } from "@/types"
import Link from "next/link"

export default function ImageCard({ image }: { image: ImageType }) {
  return (
    <Link href={`/gallery/${image.id}`}>
      <div className="group relative aspect-square overflow-hidden rounded-lg">
        <img src={image.url} width={400} height={400} />
      </div>
      <h3 className="mt-2 text-lg font-medium">{image.title}</h3>
    </Link>
  );
}