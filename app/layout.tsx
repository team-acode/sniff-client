import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'sniff',
  description: 'sniff',
};

const myFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  style: 'normal',
  weight: '45 920',
  display: 'block',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
