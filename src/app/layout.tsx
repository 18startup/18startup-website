import "./globals.css";
import Script from "next/script";
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

        {/* Microsoft Clarity - Business Analysis Tool */}

        <Script id="clarity-script" strategy="afterInteractive">
          {
            `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a] || function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.MICROSOFT_CLARITY_ID}");
            `
          }
        </Script>

        {/* Google Tag */}
        
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG_ID}`} async strategy="afterInteractive" />
        <Script id="clarity-script" strategy="afterInteractive">
          {
            `
            window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', "${process.env.GOOGLE_TAG_ID}");
              `
          }
        </Script>

        {/* Meta Pixel */}
        
        <Script id="clarity-script" strategy="afterInteractive">
          {
            `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', "${process.env.META_PIXEL_ID}");
              fbq('track', 'PageView');
            `
          }
        </Script>
        <Script src={`https://www.facebook.com/tr?id=${process.env.META_PIXEL_ID}&ev=PageView&noscript=1`} noModule></Script>

      </body>
    </html>
  )
}
