import { NextResponse } from "next/server";

// Restrict the endpoint from usage

export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
  return "";
}

export const config = {
  matcher: ["/surya/:path*", "/sujit/:path*"],
  // matcher: ["/about/:path*", "/tasks/:path*"],
};
