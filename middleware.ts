import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './utils/auth';

export function middleware(request: NextRequest) {
  const userInfo = getSession();
  const { pathname } = request.nextUrl;

  if ((pathname === '/login' || pathname === '/onboarding') && userInfo)
    return NextResponse.redirect(new URL('/', request.url));
  if (
    (pathname.includes('/mypage') ||
      pathname.includes('/find-taste') ||
      pathname.includes('/reviews')) &&
    !userInfo
  )
    return NextResponse.redirect(new URL('/login', request.url));
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',
    '/onboarding',
    '/mypage/:path',
    '/find-taste/:path',
    '/reviews/:path',
  ],
};
