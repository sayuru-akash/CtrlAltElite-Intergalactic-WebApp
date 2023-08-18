import Header from '@/components/header/header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inertgalactic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
