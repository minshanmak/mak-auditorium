import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Protect all /admin routes
    if (path.startsWith('/admin')) {
        const token = request.cookies.get('mak_admin_session')?.value;

        // If the token is missing or invalid, block access and redirect to the login portal
        if (!token || token !== 'authenticated') {
            return NextResponse.redirect(new URL('/admin-login', request.url));
        }
    }

    // Otherwise, allow the request to proceed
    return NextResponse.next();
}

// Ensure the middleware only executes on requests traversing to /admin
export const config = {
    matcher: ['/admin/:path*'],
}
