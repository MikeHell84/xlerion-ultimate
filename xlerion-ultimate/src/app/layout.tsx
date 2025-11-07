import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.scss'
import Preloader from '@/components/Preloader';

import LayoutClientWrapper from './LayoutClientWrapper';

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata: Metadata = {
  title: 'Xlerion Web',
  description: 'Xlerion Web Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Preloader />
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <LayoutClientWrapper>
            {children}
          </LayoutClientWrapper>
        </div>
      </body>
    </html>
  )
}