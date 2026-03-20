import React from 'react'
import { useTranslation } from 'react-i18next'
import { Appointment } from '../BookingFlow'

const doctors = [
  { id: 'd1', name: 'Dr. Ana Rivera', specialty: 'General' },
  { id: 'd2', name: 'Dr. Mark Chen', specialty: 'Pediatrics' },
  { id: 'd3', name: 'Dr. Luis Gomez', specialty: 'Dermatology' },
]

export default function StepDoctor({ appointment, onChange, onNext, onBack }: any) {
  const { t } = useTranslation()

  return (
    <section aria-labelledby="doctor-heading">
      <h2 id="doctor-heading">{t('chooseDoctor')}</h2>
      <ul>
        {doctors.map((d) => (
          <li key={d.id}>
            <label>
              <input
                type="radio"
                name="doctor"
                checked={appointment.doctorId === d.id}
                onChange={() => onChange({ ...appointment, doctorId: d.id })}
              />
              {d.name} — {d.specialty}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={onBack}>{t('back')}</button>
        <button onClick={onNext} disabled={!appointment.doctorId}>
          {t('next')}
        </button>
      </div>
    </section>
  )
}
