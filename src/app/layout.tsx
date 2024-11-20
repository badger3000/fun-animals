import type {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fun animals",
  description: "Demo of NextJS and Contentful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center lg:container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
