import { db } from "~/server/db";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const mockImages = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
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
    </main>
  );
}
