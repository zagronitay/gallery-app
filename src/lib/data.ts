import { Image } from "@/types"

const images: Image[] = [
  {
    id: "1",
    title: "Working from coffee shop",
    description: "Person working on a laptop at a coffee shop",
    url: "/images/1.jpg",
    tags: ["computer", "office", "work"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "2",
    title: "Beach sunset",
    description: "Sunset at a beach",
    url: "/images/2.jpg",
    tags: ["nature", "ocean", "sunset"],
    createdAt: "2024-01-02T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z"
  },
]

export async function getImages(): Promise<Image[]> {
  return images
}

export async function getImageById(id: string): Promise<Image | undefined> {
  return images.find(image => image.id === id)
}
