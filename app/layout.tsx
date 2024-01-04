import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: '어코드',
  description: '향을 새로이 풀어내다',
  viewport: {
    width: 'device-width',
    maximumScale: 1,
    initialScale: 1,
  },
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
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
