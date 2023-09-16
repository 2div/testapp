import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from './components/Header'
//import Footer from './components/Footer'
import { Roboto } from 'next/font/google'

import { Inter } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mubaader Services - Everything your business needs',
  description: ' Established in 2009 MUBAADER SERVICES is a one-stop-shop clinic for Small &amp; Medium Businesses. We offer a range of solutions to support, enhance, and grow your business on it’s stages of conceptual, ideas generation, launching your product or services, grow your home business model to an official business store. We offer innovative solutions to launch your business in Kuwait market. We also recover from distress, leverage technology, stimulate growth, adapt to ministry procedures, tap into market through marketing packages, content establishment (Web), social media support, and intergrate our trainings and workshops to compliment the entrepreneurs, SMEs, and Startups.'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={roboto.className}>
      <Header lang={params.lang} />
        {children}
      </body>
    </html>
  )
}
