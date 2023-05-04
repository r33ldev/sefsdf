import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-custom-header", request.url);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
