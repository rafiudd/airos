import Image from 'next/image'
import { Card, CardBody, CardFooter } from 'react-bootstrap'
import { WorkFlowStepType } from '../types'

type StepCardPropsCard = {
  step: WorkFlowStepType
}

const StepCard = ({ step }: StepCardPropsCard) => {
  return (
    <Card className="border p-4 p-sm-5 mb-5">
      <CardBody className="p-0 pb-5">
        {step.stepNumber && (
          <div className="icon-lg bg-primary rounded-circle fw-bold text-white mb-3">
            {step.stepNumber < 10 && <span>0</span>}
            {step.stepNumber}
          </div>
        )}
        <h4 className="mb-3">{step.title}</h4>
        <p className="heading-color">{step.description}</p>
      </CardBody>

      <CardFooter className="bg-transparent text-center p-0">
        <Image src={step.image} alt="" />
      </CardFooter>
    </Card>
  )
}

export default StepCard
