import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['el', 'en'],
  
  // The default locale to use when visiting a non-localized route
  defaultLocale: 'el',
  
  // This is the same as the default locale
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 