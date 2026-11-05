import { NextResponse, type NextRequest } from "next/server"
import { DEFAULT_LANG, LANG_COOKIE, isLang, localizePath, stripLang } from "@/lib/i18n-routing"

/**
 * Routage par langue.
 *  - `/en/...`, `/es/...` : servi tel quel.
 *  - sans préfixe : français, servi en interne sous `/fr/...` (l'adresse affichée ne change pas).
 *  - `/fr/...` : redirigé vers l'adresse sans préfixe, pour n'avoir qu'une adresse par page.
 *  - `?lang=xx` (anciennes adresses) : redirigé vers l'adresse de la langue, en gardant les autres paramètres (utm…).
 */
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const { lang: prefixed, path } = stripLang(pathname)

  const legacy = searchParams.get("lang")
  if (legacy !== null || prefixed === DEFAULT_LANG) {
    const url = request.nextUrl.clone()
    url.searchParams.delete("lang")
    url.pathname = localizePath(isLang(legacy) ? legacy : (prefixed ?? DEFAULT_LANG), path)
    return NextResponse.redirect(url, 308)
  }

  if (prefixed) return NextResponse.next()

  // Langue choisie auparavant dans le sélecteur : on la retrouve en revenant à l'adresse sans préfixe.
  const saved = request.cookies.get(LANG_COOKIE)?.value
  if (isLang(saved) && saved !== DEFAULT_LANG) {
    const url = request.nextUrl.clone()
    url.pathname = localizePath(saved, path)
    return NextResponse.redirect(url, 307)
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${DEFAULT_LANG}${path === "/" ? "" : path}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Pages seulement : ni l'API, ni les fichiers internes de Next, ni les fichiers statiques (tout ce qui a une extension).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
