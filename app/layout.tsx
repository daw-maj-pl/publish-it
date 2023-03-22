import './globals.css';
import Nav from './Nav';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto'
});

export const metadata = {
  title: 'PublishIt',
  description: 'Application for publishing posts'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} font-sans bg-gray-200`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
