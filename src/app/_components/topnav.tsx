"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <div className="flex justify-between gap-4">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => router.refresh()}
            />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
