import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shahnur Daniyarov - Mobile Application Developer',
  description:
    'Experienced Mobile Application Developer with 3+ years of expertise in native Android development. Specialized in building scalable, high-performance applications using modern architecture patterns.',
  icons: {
    icon: '/favicon.svg',
  },
  keywords: [
    'Shahnur Daniyarov',
    'Android Developer',
    'Mobile Developer',
    'Kotlin',
    'Java',
    'MVVM',
    'Clean Architecture',
    'Turkmenistan',
    'Portfolio',
  ],
  authors: [{ name: 'Shahnur Daniyarov' }],
  creator: 'Shahnur Daniyarov',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shahnur-daniyarov.vercel.app',
    title: 'Shahnur Daniyarov - Mobile Application Developer',
    description:
      'Experienced Mobile Application Developer with 3+ years of expertise in native Android development.',
    siteName: 'Shahnur Daniyarov Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shahnur Daniyarov - Mobile Application Developer',
    description:
      'Experienced Mobile Application Developer with 3+ years of expertise in native Android development.',
  },
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
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
