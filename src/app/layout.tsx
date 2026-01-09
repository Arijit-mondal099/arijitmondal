import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SEO_METADATA } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SEO_METADATA.title,
  description: SEO_METADATA.description,
  keywords: SEO_METADATA.keywords,
  openGraph: {
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    type: 'website',
    images: SEO_METADATA.ogImage ? [SEO_METADATA.ogImage] : [],
  },
  twitter: {
    card: 'summary_large_image',
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
