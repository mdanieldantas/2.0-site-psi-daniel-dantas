"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && window.gtag) {
      // Quando a rota muda, registra uma visualização de página
      window.gtag("config", "G-V8D9NKCXGS", {
        page_path: pathname,
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      {/* Script do Google Analytics */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-V8D9NKCXGS`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V8D9NKCXGS', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}