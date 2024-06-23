import "./globals.css";
import type { Metadata } from "next";

// Components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Toaster
import { Toaster } from "react-hot-toast";

// Nextjs Toploader
import NextTopLoader from 'nextjs-toploader';

// Fonts
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "18startup | Startups Entrepreuner",
  description: "Start building your startup while in collage.",
  keywords: ["18startup", "18starup entrepreuner"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader color="var(--primaryOrange)" showSpinner={false} crawl={true} easing="ease-in" crawlSpeed={180} height={5} />
        <Toaster containerStyle={{ zIndex: 1001, fontSize: '0.8rem' }} gutter={5} position="bottom-right" />
        <Navbar/>
        <main className="app__main">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
