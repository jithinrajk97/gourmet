import { Alex_Brush } from 'next/font/google';
import { Inria_Serif } from 'next/font/google';
import { Inter } from 'next/font/google';
import Header from "@/widgets/Header";
import Footer from '@/widgets/Footer';
import '../style/global.scss';
import GlobalProviders from '@/components/GlobalProviders';
import { WebVitals } from '@/components/WebVitals';
import localFont from 'next/font/local'
const fontSecondary = Alex_Brush({
  subsets: ['latin'],
  variable: '--ff-secondary',
  weight: ['400']
})

const fontPrimary = Inria_Serif({
  subsets: ['latin'],
  variable: '--ff-primary',
  weight: ['300', '400',  '700']
})

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--ff-inter',
  weight: ['400', '500', '600', '700']
})


const sloop = localFont({
  variable: '--font-sloop',
  src: [
    {
      path: './fonts/sloop/Sloop Script Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})
const migra = localFont({
  variable: '--font-migra',
  src: [
    {
      path: './fonts/migra/Migra-Extrabold.woff',
      weight: '400',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: 'Gourmet',
  description: 'Coming from the esteemed house of Vivaah Celebrations, VC Gourmet offers an unparalleled selection of premium delicacies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.variable} ${fontSecondary.variable} ${fontInter.variable} ${sloop.variable} ${migra.variable}`}>
      <WebVitals />
        <GlobalProviders>
          <Header />
          {children}
          <Footer />
        </GlobalProviders>
      </body>
    </html>
  )
}

