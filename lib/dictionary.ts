'server-only'

import type { Locale } from '@/i18n.config'

const dictionaries = {
  English: () => import('@/dictionaries/en.json').then(module => module.default),
  Arabic: () => import('@/dictionaries/ar.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
