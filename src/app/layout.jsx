import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import Devlogo from "@/images/screenshots/devlogo.jpg"

export const metadata = {
  title: {
    image: {Devlogo},
    template: '%s - TaxPal',
    default: 'Devaney Aviation - Flying made Simple',
  },
  description:
    'Aircraft Rental service for pilots looking to earn their hours',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
