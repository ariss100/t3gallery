import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { ratelimit } from "~/server/ratelimit";
const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 10 } })
    .middleware(async ({ req }) => {
      const user = auth();
      const { success } = await ratelimit.limit(user.userId);
      const fullUserData = await clerkClient.users.getUser(user.userId);

      if (!fullUserData?.privateMetadata?.["can-upload"] === true){
        throw new UploadThingError("Unauthorized");
      }

      if (!success) {
        throw new UploadThingError("Too many files");
      }
      if (!user.userId) throw new UploadThingError("Unauthorized");

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // upload our file
      await db.insert(images).values({
        name: file.name,
        url:file.url,
        userId: metadata.userId,
      });
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
