import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";

async function Images() {
  const mockImages = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {mockImages.map((image) => (
        <div key={image.id} className="w-48">
          <img
            src={image.url}
            alt={image.name}
            className="w-48 h-48 object-cover"
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <Images />
    </main>
  );
}
