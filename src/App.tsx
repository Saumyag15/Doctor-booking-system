import React from 'react'
import { useTranslation } from 'react-i18next'
import BookingFlow from './booking/BookingFlow'
import LanguageToggle from './components/LanguageToggle'

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-top">
          <h1>{t('title')}</h1>
          <LanguageToggle />
        </div>
      </header>
      <main>
        <BookingFlow />
      </main>
    </div>
  )
}
