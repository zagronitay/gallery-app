import Gallery from "@/components/Gallery"
import { getImages } from "@/lib/data"

export default async function Home() {
  const images = await getImages()
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <Gallery images={images} />
    </div>
  )
}
