import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Toaster} from "react-hot-toast";
import Header from "@/components/Header";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <Toaster position="top-center"/>

        <div className="p-10">
            {children}
        </div>
        </body>
        </html>
    )
}