import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './component/navbar/navbar'
import Modal from './component/modals/modal'
const Font=Nunito({
  subsets:['latin']
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Creating clone for airbnb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Font.className}>
        <Navbar/>
        <Modal title="Login Module"
          isOpen/>
        {children}
        </body>
    </html>
  )
}
