import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/common/ScrollToTop";
import ScrollToTopIcon from "@/components/common/ScrollToTopIcon";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  metadataBase: new URL("https://bytenobs.com"),
  title: "ByteNoBs",
  description:
    "ByteNoBS - Your Tech Partner for No-Nonsense Solutions and Innovative Ideas",
  keywords: [
    "ByteNoBS",
    "tech solutions",
    "web development",
    "custom applications",
    "AI solutions",
    "no-nonsense tech",
    "business automation",
    "PDF tools",
    "expense management",
    "document management",
    "e-commerce development",
    "portfolio websites",
    "AI-powered applications",
    "local business solutions",
    "small business tech",
    "startups",
    "innovative technology",
    "tech consulting",
    "software development",
    "custom software",
    "business growth",
    "SEO optimization",
    "digital marketing",
    "Saas solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bytenobs.com",
    siteName: "ByteNoBS",
    images: [
      {
        url: "/assets/og-image.jpg", // Create an OG image
        width: 1200,
        height: 630,
        alt: "ByteNoBS - No-Nonsense Tech Solutions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "ByteNoBS" }],
  creator: "ByteNoBS",
  publisher: "ByteNoBS",
  icons: {
    icon: "./assets/logo.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://bytenobs.com",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XZDYFR63M1`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XZDYFR63M1', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ByteNoBS",
              "url": "https://bytenobs.com",
              "logo": "https://bytenobs.com/assets/logo.png",
              "description": "ByteNoBS delivers innovative, no-nonsense tech solutions. Custom web development, AI integration, and business applications without the fluff.",
              "sameAs": [
                "https://twitter.com/bytenobs",
                "https://linkedin.com/company/bytenobs",
                "https://instagram.com/bytenobs"
              ]
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ScrollProgressBar />
        <ScrollToTop />
        {children}
        <ScrollToTopIcon />
      </body>
    </html>
  );
}
