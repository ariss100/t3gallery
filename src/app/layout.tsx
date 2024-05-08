import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { TopNav } from "~/app/_components/topnav";
import { Toaster } from "sonner";
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "T3 Gallery",
    description: "Generated by Aris",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={`font-sans ${inter.variable} flex flex-col gap-4`}
                >
                    <TopNav />
                    {children}
                    {modal}
                    <div id="modal-root"></div>
                    <Toaster />
                </body>
            </html>
        </ClerkProvider>
    );
}
