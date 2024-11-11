import { getImageById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ImagePage({
  params,
}: {
  params: { id: string };
}) {
  const p = await params;
  const image = await getImageById(p.id);

  if (!image) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <img src={image.url} width={400} height={400} />
      </div>
      <h1 className="text-2xl font-bold">{image.title}</h1>
      <p className="text-gray-600">{image.description}</p>
    </div>
  );
}
