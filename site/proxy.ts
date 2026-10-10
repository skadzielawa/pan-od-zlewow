import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPolish = pathname === "/pl" || pathname.startsWith("/pl/");
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  if (!isPolish && !isEnglish) {
    const url = request.nextUrl.clone();
    url.pathname = `/pl${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-lang", isEnglish ? "en" : "pl");

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
