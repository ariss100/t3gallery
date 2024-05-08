import { deleteImage, getImage } from "~/server/queries";
import Image from "next/image";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";

export default async function FullPageImageView(props: { id: string }) {
    const image = await getImage(props.id.toString());
    const uploaderInfo = await clerkClient.users.getUser(image.userId);
    return (
        <div className="flex w-full h-full justify-center items-center bg-zinc-900/50 min-w-0 text-white gap-4">
            <div className="flex-shrink">
                <img
                    src={image.url}
                    alt={image.name}
                    className="w-full object-contain"
                />
            </div>

            <div className="w-48 flex flex-col flex-shrink-0">
                <div className="text-xl font-bold">{image.name}</div>
                <div>Id: {image.id}</div>
                <div>Uploader: {uploaderInfo.fullName}</div>
                <div>
                    created at: {new Date(image.createdAt).toLocaleString()}
                </div>
                <form
                    action={async () => {
                        "use server";
                        await deleteImage(image.id);
                    }}
                >
                    <Button type="submit" variant="destructive">
                        Delete
                    </Button>
                </form>
            </div>
        </div>
    );
}
