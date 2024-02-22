import {Inter} from "next/font/google";
import "./globals.css"

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <body className={inter.className}>
    <div>
      {children}
    </div>
    </body>
    </html>
  );
}