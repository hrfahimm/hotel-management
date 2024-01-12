import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ThemeProvider from '@/Context/ThemeProvider'
import NextAuthProvider from '@/Context/AuthProvider'
import Toast from '@/libs/Toast'


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700', '900'], style: ["italic", 'normal'], variable: "--font-poppins" })

export const metadata: Metadata = {
    title: 'HRF | Hotel ',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
                    crossOrigin='anonymous'
                />
            </head>
            <body className={poppins.className}>
                <NextAuthProvider>
                    <ThemeProvider  >
                        <Toast />
                        <main className='font-normal px-4  '>
                            <Header />
                            {children}
                            <Footer />
                        </main>
                    </ThemeProvider>
                </NextAuthProvider>
            </body>
        </html >
    )
}



