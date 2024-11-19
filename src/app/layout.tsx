import Header from "@/component/Header"
import Footer from "@/component/Footer"

import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container px-2 lg:px-0 py-4">
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
