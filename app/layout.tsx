import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/cookie-consent"; // Client Component
import Analytics from "@/components/analytics"; // Import do componente Analytics

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Meta Tags Essenciais */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Psicoterapia online humanizada e acolhedora com Daniel Dantas. Atendimento em português para ansiedade, depressão, autoconhecimento, saúde mental, terapia online e bem-estar emocional. Abordagem centrada na pessoa, ACP, focalização, mindfulness, psicólogo clínico, psicólogo rogeriano e mais."
        />
        <meta
          name="keywords"
          content="terapia, terapeuta perto de mim, terapia cognitiva comportamental, psicólogo perto de mim, psicoterapia, aconselhamento perto de mim, encontre um terapeuta, psicoterapeuta perto de mim, abordagem centrada na pessoa, ACP, focalização, mindfulness, psicólogo clínico, clínica, psicólogo rogeriano, Rogers"
        />

        {/* Meta Tags Open Graph */}
        <meta property="og:title" content="Daniel Dantas | Psicólogo Online | Terapia em Português" />
        <meta property="og:description" content="Psicoterapia online humanizada e acolhedora com Daniel Dantas." />
        <meta property="og:image" content="/Daniel-Dantas-logo-footer-correta.png" />
        <meta property="og:url" content="https://psicologodanieldantas.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Psicólogo Daniel Dantas" />
        <meta property="og:see_also" content="https://www.youtube.com/@psidanieldantas" />
        <meta property="og:see_also" content="https://www.facebook.com/psicologodanieldantas" />
        <meta property="og:see_also" content="https://www.instagram.com/psidanieldantas/" />

        {/* Meta Tags Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daniel Dantas | Psicólogo Online | Terapia em Português" />
        <meta name="twitter:description" content="Psicoterapia online humanizada e acolhedora com Daniel Dantas." />
        <meta name="twitter:image" content="/Daniel-Dantas-logo-footer-correta.png" />
        <meta name="twitter:creator" content="@psidanieldantas" />

        {/* Favicon e Ícones descomentar quando fizer upload das imagens
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        */}

        {/* Link Canônico */}
        <link rel="canonical" href="https://psicologodanieldantas.com/" />

        {/* Componente Analytics */}
        <Analytics />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Componente de Consentimento de Cookies */}
        <CookieConsent />
      </body>
    </html>
  );
}