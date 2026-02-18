import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // List of routes that require authentication
    const adminRoutes = ['/admin', '/admin/enquiry', '/admin/updatecareers', '/admin/blogs'];

    // Check if the current route starts with /admin
    const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));

    if (isAdminRoute) {
        // In Next.js middleware, we can check for a cookie
        // Note: localStorage is NOT available in middleware. 
        // We'll need to use cookies for this to work effectively in middleware,
        // or handle it in a layout/client-side if we must use localStorage.

        // HOWEVER, the user specifically mentioned localStorage in their code before.
        // Middleware can't read localStorage.

        // Strategy: We'll set a cookie on login and use it here.
        // For now, let's assume a cookie named 'adminToken' exists.
        const token = request.cookies.get('adminToken')?.value;

        if (!token) {
            const loginUrl = new URL('/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
