import {Inter} from "next/font/google";
import "./globals.css"
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <body className={`${inter.className} bg-background text-onBackground`}>
    <main className="max-w-screen-xl mx-auto my-8 text-center px-8">
      <header className={"text-left"}>
        <Link className={"font-semibold rounded-full hover:underline"} href={"/"}>Home</Link>
      </header>
      {children}
    </main>
    </body>
    </html>
  );
}
