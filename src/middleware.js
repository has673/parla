import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"; // Import getToken from next-auth

export async function middleware(request) {
  // Get the token (session) from the request
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If no token (user not logged in), redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  // Check if token has expired
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  if (token.exp && token.exp < currentTime) {
    // If token is expired, redirect to login
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  // If token exists, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/Service/:path*", "/Home/:path*", "/Notification/:path*"],
};
