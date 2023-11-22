import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TimeVerse',
  description: 'An Activity Tracker App built with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="public/favicon.png" />
      </head>
    <body className={inter.className}>
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <main className='min-h-screen max-w-6xl mx-auto'>
        {children}
      </main>
      <Toaster position="top-center" richColors />
      </ThemeProvider>
    </body>
    </html>
  )
}
