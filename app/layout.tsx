import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Riyad Hossain Huzaifa - Brave Web3 Developer',
  description: 'Web3 এবং Brave Browser এ বিশেষজ্ঞ ডেভেলপার। DApp, Smart Contracts এবং Brave Wallet integration এ দক্ষ।',
  keywords: ['Web3', 'Brave', 'Developer', 'DApp', 'Smart Contracts', 'BAT', 'Blockchain'],
  authors: [{ name: 'Riyad Hossain Huzaifa' }],
  openGraph: {
    title: 'Riyad Hossain Huzaifa - Brave Web3 Developer',
    description: 'Web3 এবং Brave Browser এ বিশেষজ্ঞ ডেভেলপার',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
