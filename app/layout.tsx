import Footer from "@/components/ui/Footer"
import { Navigation } from "@/components/ui/Navbar"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Geist, Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "./siteConfig"

const geist = Geist({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--display-family',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--text-family',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://builder.domains"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Domain Builder", "Business", "Software"],
  authors: [
    {
      name: "Builder Domains",
      url: "https://builder.domains",
    },
  ],
  creator: "Builder Domains",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@builderdomains",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
