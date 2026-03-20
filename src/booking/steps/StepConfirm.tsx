import React from 'react'
import { useTranslation } from 'react-i18next'
import { Appointment } from '../BookingFlow'

export default function StepConfirm({ appointment, onBack }: any) {
  const { t } = useTranslation()
  const doctorName = appointment.doctorId === 'd1' ? 'Dr. Ana Rivera' : appointment.doctorId === 'd2' ? 'Dr. Mark Chen' : 'Dr. Luis Gomez'

  return (
    <section aria-labelledby="confirm-heading">
      <h2 id="confirm-heading">{t('confirm')}</h2>
      <dl>
        <dt>{t('date')}</dt>
        <dd>{appointment.date}</dd>
        <dt>{t('doctor')}</dt>
        <dd>{doctorName}</dd>
      </dl>
      <div>
        <button onClick={onBack}>{t('back')}</button>
        <button onClick={() => alert('Appointment confirmed!')}>{t('confirmBtn')}</button>
      </div>
    </section>
  )
}
