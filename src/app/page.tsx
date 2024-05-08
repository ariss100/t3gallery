import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";
import { getMyImages } from "~/server/queries";
import { SignedIn } from "@clerk/nextjs";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
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
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
