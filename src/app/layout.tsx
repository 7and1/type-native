import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Type-Native - Free Online Virtual Keyboards for 20+ Languages',
    template: '%s | Type-Native',
  },
  description:
    'Free online virtual keyboards for Arabic, Russian, Hebrew, Japanese, Korean, and 15+ more languages. Type in any script instantly in your browser. No download required.',
  keywords: [
    'virtual keyboard',
    'online keyboard',
    'arabic keyboard',
    'russian keyboard',
    'hebrew keyboard',
    'multilingual keyboard',
    'type in any language',
    'clavier arabe',
    'clavier russe',
  ],
  authors: [{ name: 'Type-Native' }],
  creator: 'Type-Native',
  publisher: 'Type-Native',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://type-native.com',
    siteName: 'Type-Native',
    title: 'Type-Native - Free Online Virtual Keyboards',
    description: 'Free virtual keyboards for 20+ languages. Type in any script instantly.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Type-Native - Free Online Virtual Keyboards',
    description: 'Free virtual keyboards for 20+ languages. Type in any script instantly.',
  },
  metadataBase: new URL('https://type-native.com'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
