import React from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import CardProvider from '@/contexts/useCardContext'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '500',
})

export const metadata: Metadata = {
  title: 'House Food',
  icons: {
    icon: ['/favicon.ico?v=4'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} font-roboto w-full`}>
        <CardProvider>{children}</CardProvider>
      </body>
    </html>
  )
}
