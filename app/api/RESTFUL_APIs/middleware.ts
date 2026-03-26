import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
    const isLoggedIn = false;

    if(!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

// ? middleware is used for protecting route, authentication and authtorization