import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import StepDate from './steps/StepDate'
import StepDoctor from './steps/StepDoctor'
import StepConfirm from './steps/StepConfirm'

export type Appointment = {
  date?: string
  doctorId?: string
}

export default function BookingFlow() {
  const [step, setStep] = useState(0)
  const [appointment, setAppointment] = useState<Appointment>({})
  const { i18n } = useTranslation()

  function next() {
    setStep((s) => Math.min(2, s + 1))
  }
  function back() {
    setStep((s) => Math.max(0, s - 1))
  }

  return (
    <div className="booking-flow" role="region" aria-label="Booking flow">
      {step === 0 && (
        <StepDate
          appointment={appointment}
          onChange={setAppointment}
          onNext={next}
        />
      )}
      {step === 1 && (
        <StepDoctor
          appointment={appointment}
          onChange={setAppointment}
          onNext={next}
          onBack={back}
        />
      )}
      {step === 2 && (
        <StepConfirm appointment={appointment} onBack={back} />
      )}
    </div>
  )
}
