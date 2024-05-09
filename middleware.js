// "use client";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const revalidate = 0;

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const cookieStore = cookies();
  //   const isAuthenticated = Cookies.get("authToken");
  const token = cookieStore.get("authToken");
  console.log("issds", token);

  // If the user is authenticated, continue as normal

  console.log("hitttt");
  if (token) {
    return NextResponse.next();
  } else {
    // Redirect to login page if not authenticated
    const response = NextResponse.redirect(new URL("/signin", request.url));
    response.headers.set("x-middleware-cache", "no-cache"); // Disables middleware caching
    return response;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/",
};
