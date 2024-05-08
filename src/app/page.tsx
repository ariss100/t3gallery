import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";
import { getMyImages } from "~/server/queries";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";

async function Images() {
    const images = await getMyImages();
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {images.map((image) => (
                <div key={image.id} className="flex h-48 w-48 flex-col">
                    <Image
                        src={image.url}
                        alt={image.name}
                        style={{ objectFit: "cover" }}
                        width={480}
                        height={480}
                    />
                    <p>{image.id}</p>
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
