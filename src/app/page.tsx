import { db } from "~/server/db";
export const dynamic = "force-dynamic";
const mockUrls = [
  "https://utfs.io/f/2bbded3e-d1c2-48a6-b682-633efa821c01-fimq0t.jpg",
  "https://utfs.io/f/20d45af9-8c3c-4d7d-ab50-e947eead3b28-92zgzq.jpg",
  "https://utfs.io/f/737ded39-bcf4-4ddf-8162-eb51dcaf45d8-bj5llk.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img
              src={image.url}
              alt="image"
              className="w-48 h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
