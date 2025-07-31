import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DovoQA - QA as a Service",
  description:
    "DovoQA offers comprehensive Quality Assurance as a Service with flat-rate pricing and unlimited resources.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const underConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === "true"

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {underConstruction ? (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
              <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
              <p className="text-lg text-center">
                Our website is currently under construction. Please check back soon!
              </p>
            </div>
          ) : (
            <>
              {children}
              <Toaster />
              <Suspense>
                <Analytics />
              </Suspense>
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
