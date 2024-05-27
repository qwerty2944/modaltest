import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import ModalRoot from '@/shared/ui/components/Modal/ModalRoot';
import { ModalProvider } from '@/shared/providers/ModalProvider';

// const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: { lng: string };
};

export const metadata: Metadata = {
  title: '냠냠굿',
  description: '졸업작품',
};

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng}>
      <body>
        <ModalProvider />
        <ModalRoot />
        {children}
      </body>
    </html>
  );
}
