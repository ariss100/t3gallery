import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "./simple-upload-button";
export function TopNav() {
    return (
        <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
            <div>
                <Link href="/" className="hover:underline">
                    T3 Gallery
                </Link>
            </div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>

                <SignedIn>
                    <div className="flex justify-between gap-4">
                        <SimpleUploadButton />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    );
}
