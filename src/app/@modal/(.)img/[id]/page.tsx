import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoModal({
    params: { id: photoId, url: photoUrl },
}: {
    params: { id: string; url: string };
}) {
    return (
        <Modal>
            <FullPageImageView id={photoId} />
        </Modal>
    );
}
