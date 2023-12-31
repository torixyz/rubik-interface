import './globals.css'
import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'

const chakraPetch = Chakra_Petch({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Rubik | The World`s first modular blockchain for Generative AI',
  description: 'The World`s first modular blockchain for Generative AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&display=swap"
                  rel="stylesheet" />

      </head>
      <body className={chakraPetch.className}>{children}</body>
    </html>
  )
}
