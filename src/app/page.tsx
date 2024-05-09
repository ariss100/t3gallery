import "@uploadthing/react/styles.css";
import { getMyImages } from "~/server/queries";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
    const images = await getMyImages();
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
                gap: "1rem",
            }}
        >
            {images.map((image) => (
                <Link href={`/img/${image.id}`}>
                    <div
                        style={{
                            position: "relative",
                            height: "400px",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src={image.url}
                            alt={image.name}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </Link>
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
