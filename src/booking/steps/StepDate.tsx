import React from 'react'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import { Appointment } from '../BookingFlow'

export default function StepDate({ appointment, onChange, onNext }: any) {
  const { t } = useTranslation()
  const today = dayjs().format('YYYY-MM-DD')

  return (
    <section aria-labelledby="date-heading">
      <h2 id="date-heading">{t('chooseDate')}</h2>
      <label>
        {t('date')}
        <input
          type="date"
          min={today}
          value={appointment.date || ''}
          onChange={(e) => onChange({ ...appointment, date: e.target.value })}
        />
      </label>
      <div>
        <button onClick={onNext} disabled={!appointment.date}>
          {t('next')}
        </button>
      </div>
    </section>
  )
}
