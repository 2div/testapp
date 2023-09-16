export const i18n = {
  defaultLocale: 'English',
  locales: ['English', 'Arabic']
} as const

export type Locale = (typeof i18n)['locales'][number]
