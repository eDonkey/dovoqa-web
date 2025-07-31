import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Dovoqa - QA as a Service for Software Development",
  description: "Elevate your software quality with our expert QA services. We find the bugs before your users do.",
  keywords:
    "QA as a Service, software quality assurance, automated testing, performance testing, security testing, software testing company, dovoqa, quality control, software development",
  openGraph: {
    title: "Dovoqa - QA as a Service for Software Development",
    description: "Elevate your software quality with our expert QA services. We find the bugs before your users do.",
    url: "https://webmailer.dovoqa.com", // IMPORTANT: Replace with your actual primary domain
    siteName: "Dovoqa",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Replace with your actual Open Graph image
        width: 1200,
        height: 630,
        alt: "Dovoqa - Quality Assurance as a Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dovoqa - QA as a Service for Software Development",
    description: "Elevate your software quality with our expert QA services. We find the bugs before your users do.",
    creator: "@dovoqa_qa", // IMPORTANT: Replace with your actual Twitter handle
    images: ["/placeholder.svg?height=630&width=1200"], // Replace with your actual Twitter image
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={outfit.variable}>
      <head>
        {/* Schema Markup for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dovoqa",
              url: "https://webmailer.dovoqa.com", // IMPORTANT: Replace with your actual primary domain
              logo: "/placeholder-logo.svg", // Use the correct logo path
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54-9-11-3234-6592", // Your WhatsApp number
                contactType: "customer service",
                email: "hello@dovoqa.com",
              },
              sameAs: [
                "https://www.linkedin.com/company/dovoqa", // IMPORTANT: Replace with your actual LinkedIn URL
                // Add other social media profiles here
              ],
            }),
          }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
