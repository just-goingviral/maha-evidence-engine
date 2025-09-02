jest.mock('next/server', () => ({
  NextResponse: {
    next: () => ({ headers: new Headers() }),
  },
}));

import { middleware } from '../middleware';

type MockRequest = { nextUrl: { pathname: string }; headers: Headers };

describe('middleware', () => {
  it('sets security headers on every response', () => {
    const request: MockRequest = { nextUrl: { pathname: '/' }, headers: new Headers() };
    const response = middleware(request as any);
    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(response.headers.get('X-Frame-Options')).toBe('DENY');
    expect(response.headers.get('X-XSS-Protection')).toBe('1; mode=block');
    expect(response.headers.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
    expect(response.headers.get('Permissions-Policy')).toBe('camera=(), microphone=(), geolocation=()');
    expect(response.headers.get('Content-Security-Policy')).toContain("default-src 'self'");
  });

  it('applies CORS headers for allowed origins on API routes', () => {
    process.env.CORS_ORIGIN = 'http://allowed.com';
    const request: MockRequest = {
      nextUrl: { pathname: '/api/data' },
      headers: new Headers({ origin: 'http://allowed.com' }),
    };
    const response = middleware(request as any);
    expect(response.headers.get('Access-Control-Allow-Origin')).toBe('http://allowed.com');
    expect(response.headers.get('Access-Control-Allow-Methods')).toBe('GET, POST, PUT, DELETE, OPTIONS');
    expect(response.headers.get('Access-Control-Allow-Headers')).toBe('Content-Type, Authorization');
    expect(response.headers.get('Access-Control-Max-Age')).toBe('86400');
    delete process.env.CORS_ORIGIN;
  });

  it('does not set CORS headers for disallowed origins', () => {
    process.env.CORS_ORIGIN = 'http://allowed.com';
    const request: MockRequest = {
      nextUrl: { pathname: '/api/data' },
      headers: new Headers({ origin: 'http://notallowed.com' }),
    };
    const response = middleware(request as any);
    expect(response.headers.get('Access-Control-Allow-Origin')).toBeNull();
    delete process.env.CORS_ORIGIN;
  });
});
