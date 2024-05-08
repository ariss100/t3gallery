import Image from "next/image";
import FullPageImageView from "~/app/components/full-image-page";
import { getImage } from "~/server/queries";

export default function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    return <FullPageImageView id={photoId} />;
}
