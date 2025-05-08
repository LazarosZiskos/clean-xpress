import { getRequestConfig } from 'next-intl/server';
import { locales } from './navigation';

type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) {
    return {
      messages: {},
      locale: 'el' as const,
      timeZone: 'Europe/Athens'
    };
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
    locale: locale as Locale,
    timeZone: 'Europe/Athens'
  };
}); 