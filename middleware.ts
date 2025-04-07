import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Adiciona cabeçalhos de cache para recursos estáticos
  if (
    request.nextUrl.pathname.startsWith("/_next/static") ||
    request.nextUrl.pathname.startsWith("/public/") ||
    request.nextUrl.pathname.match(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/)
  ) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
  }

  // Adiciona cabeçalhos de cache para páginas HTML
  else if (request.nextUrl.pathname.endsWith("/")) {
    response.headers.set("Cache-Control", "public, max-age=3600, s-maxage=60, stale-while-revalidate=86400")
  }

  // Adiciona cabeçalhos de segurança
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

