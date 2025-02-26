'use client'
import Stepper from 'bs-stepper'
import { MutableRefObject, useEffect, useState } from 'react'

import 'bs-stepper/dist/css/bs-stepper.min.css'

const useBSStepper = (stepperRef: MutableRefObject<HTMLDivElement | null>) => {
  const [stepperInstance, setStepperInstance] = useState<Stepper>()

  useEffect(() => {
    if (stepperRef.current && !stepperInstance) {
      setStepperInstance(
        new Stepper(stepperRef.current, {
          linear: false,
          animation: true,
        }),
      )
    }
    return () => stepperInstance?.destroy()
  }, [])

  return stepperInstance
}

export default useBSStepper
