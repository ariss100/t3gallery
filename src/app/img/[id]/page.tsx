import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    const image = await getImage(photoId);
    return (
        <Image
            src={image.url}
            alt={image.name}
            style={{ objectFit: "cover" }}
            width={480}
            height={480}
        />
    );
}
