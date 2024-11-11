import { NextResponse } from 'next/server';

export function middleware(request) {
    const authToken = request.cookies.get('authToken');

    const loginPath = '/login';
    const home = '/'; 


    if (!authToken && request.nextUrl.pathname !== loginPath) {
        return NextResponse.redirect(new URL(loginPath, request.url));
    }

    if (authToken && request.nextUrl.pathname === loginPath) {
        return NextResponse.redirect(new URL(home, request.url));
    }


    return NextResponse.next();
}


export const config = {
    matcher: ['/'],
};
