import '@/assets/scss/style.scss'
import BackToTop from '@/components/BackToTop'
import PageWrapper from '@/components/PageWrapper'
import { DEFAULT_PAGE_TITLE } from '@/states/constants'
import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'

const Instrument = Instrument_Sans({
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  weight: [ '400', '500','600', '700'],
})


export const metadata: Metadata = {
  title: {
    template: ' %s | Airos Demineral',
    default: DEFAULT_PAGE_TITLE,
  },
  description: "Airos. Air mineral alami berkualitas tinggi, langsung dari sumber alam terbaik.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body  className={Instrument.className}>
        <PageWrapper>
          {children}
          <BackToTop />
        </PageWrapper>
      </body>
    </html>
  )
}
