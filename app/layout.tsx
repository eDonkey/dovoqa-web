import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://webmailer.dovoqa.com"),
  title: "DovoQA - QA as a Service | Flat Rate, Unlimited Resources",
  description:
    "DovoQA offers comprehensive QA as a Service with predictable flat-rate pricing and virtually unlimited resources, adapting to your project's needs without changing your billing.",
  keywords: [
    "QA as a Service",
    "Quality Assurance",
    "Flat Rate QA",
    "Unlimited QA Resources",
    "Software Testing",
    "DovoQA",
    "Predictable QA Costs",
    "Flexible QA",
  ],
  openGraph: {
    title: "DovoQA - QA as a Service | Flat Rate, Unlimited Resources",
    description:
      "DovoQA offers comprehensive QA as a Service with predictable flat-rate pricing and virtually unlimited resources, adapting to your project's needs without changing your billing.",
    url: "https://webmailer.dovoqa.com",
    siteName: "DovoQA",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "DovoQA Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DovoQA - QA as a Service | Flat Rate, Unlimited Resources",
    description:
      "DovoQA offers comprehensive QA as a Service with predictable flat-rate pricing and virtually unlimited resources, adapting to your project's needs without changing your billing.",
    images: ["/placeholder.svg?height=675&width=1200"],
    creator: "@DovoQA", // Replace with actual Twitter handle if available
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
