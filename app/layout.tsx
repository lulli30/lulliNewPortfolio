import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "John Andrew Borabo | Developer Portfolio",
  description: "Retro arcade-themed developer portfolio with neon effects",
  icons: {
    icon: [
      {
        url: "/favicon1.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon1.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${pressStart.className} font-sans antialiased scanline-effect`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
