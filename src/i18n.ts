import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      title: 'Sunrise Clinic — Appointment Booking',
      chooseDate: 'Choose date',
      chooseDoctor: 'Choose doctor',
      confirm: 'Confirm appointment',
      date: 'Date',
      doctor: 'Doctor',
      language: 'Language',
      next: 'Next',
      back: 'Back',
      confirmBtn: 'Confirm'
    }
  },
  es: {
    translation: {
      title: 'Clinica Amanecer - Reserva de cita',
      chooseDate: 'Elegir fecha',
      chooseDoctor: 'Elegir doctor',
      confirm: 'Confirmar cita',
      date: 'Fecha',
      doctor: 'Doctor',
      language: 'Idioma',
      next: 'Siguiente',
      back: 'Atras',
      confirmBtn: 'Confirmar'
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
