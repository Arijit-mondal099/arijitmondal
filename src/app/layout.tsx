import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SEO_METADATA } from "@/lib/constants";
// import LightRays from "@/components/LightRays";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO_METADATA.title,
  description: SEO_METADATA.description,
  keywords: SEO_METADATA.keywords,
  openGraph: {
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    type: "website",
    images: SEO_METADATA.ogImage ? [SEO_METADATA.ogImage] : [],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    creator: SEO_METADATA.twitterHandle,
    images: SEO_METADATA.ogImage ? [SEO_METADATA.ogImage] : [],
  },
  icons: {
    icon: "app_images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <div className="absolute inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div> */}

      <body
        className={`${inter.variable} font-sans antialiased bg-linear-to-b from-background via-background to-muted/20 relative`}
      >
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[48px_48px]" />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <script
          src="https://supportai-seven.vercel.app/chat_bot.js"
          data-owner-id="usr_112984746597811213"
        ></script>
      </body>
    </html>
  );
}
