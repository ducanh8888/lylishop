import { NextResponse, type NextRequest } from "next/server";

import { SITE } from "@/lib/site";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === `www.${SITE.domain}`) {
    const url = request.nextUrl.clone();
    url.hostname = SITE.domain;
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-touch-icon.png).*)"],
};
