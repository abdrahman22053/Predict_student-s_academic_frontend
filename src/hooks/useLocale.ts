import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useLocale() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    
    // Apply RTL for Arabic
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl'
      document.documentElement.lang = 'ar'
    } else {
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = lang
    }
  }

  // Apply direction on initial load
  useEffect(() => {
    const currentLang = i18n.language
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl'
      document.documentElement.lang = 'ar'
    } else {
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = currentLang
    }
  }, [i18n.language])

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    t: i18n.t,
  }
}
