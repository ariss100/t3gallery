import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import Image from "next/image";

export default async function PhotoModal({
    params: { id: photoId, url: photoUrl },
}: {
    params: { id: string; url: string };
}) {
    const image = await getImage(photoId);
    return (
        <Modal>
            <Image
                src={image.url}
                alt={image.name}
                style={{ objectFit: "cover" }}
                width={480}
                height={480}
            />
        </Modal>
    );
}
