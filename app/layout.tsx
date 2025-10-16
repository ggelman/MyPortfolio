import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Giulia Baracat - Desenvolvedora Full Stack",
  description:
    "Portfólio de Giulia Helena Gelman F. Baracat - Desenvolvedora Full Stack e Gerente de Projetos Júnior especializada em soluções web eficientes e inovadoras.",
  keywords: "desenvolvedor, full stack, freelance, web development, Vue.js, Node.js, C#, .NET",
  authors: [{ name: "Giulia Baracat" }],
  openGraph: {
    title: "Giulia Baracat - Desenvolvedora Full Stack",
    description: "Tecnologia, eficiência e boas ideias em código",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={dmSans.variable}>
      <body className={`${dmSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={false}>
          {children}
          <Toaster />
        </ThemeProvider>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}