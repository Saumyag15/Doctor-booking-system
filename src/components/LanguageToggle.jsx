import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </button>
  )
}
