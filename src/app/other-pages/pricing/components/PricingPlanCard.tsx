import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { currency } from '@/states/constants'
import { PricingPlanType, PricingType } from '../types'
import Link from 'next/link'

type PropsType = {
  plan: PricingPlanType
  duration: PricingType['duration']
}

const PricingPlanCard = ({ plan, duration }: PropsType) => {
  const Icon = plan.icon

  return (
    <Card className={`p-0 border ${plan.isPopular ? 'border-primary' : 'shadow'}`}>
      {plan.isPopular && (
        <div className="bg-primary text-white rounded position-absolute top-0 start-50 translate-middle px-2 py-1 ">Most popular</div>
      )}

      <CardHeader className={`border-opacity-25 border-bottom p-4 ${plan.isPopular && 'bg-primary bg-opacity-10 border-primary'}`}>
        <div className={`icon-lg rounded-circle mb-3 flex-centered ${plan.isPopular ? 'bg-primary bg-opacity-10' : 'bg-light'}`}>
          <Icon size={24} className={`fa-lg lh-1 ${plan.isPopular ? 'text-primary' : 'heading-color'}`} />
        </div>

        <h6 className="mb-3">{plan.title}</h6>
        <p className="mb-0">
          <span className="h2 mb-0 plan-price">
            {currency}
            {plan.price}
          </span>
          /{duration}
        </p>
        <small>Basic feature for up to 10 users</small>
      </CardHeader>

      <CardBody className={`p-4 ${plan.isPopular ? 'bg-primary bg-opacity-10' : ''}`}>
        <div className="text-center text-lg-start">
          <h6 className="heading-color">Quick look at all the features</h6>

          <ul className="list-group list-group-borderless mb-2 mb-sm-4">
            {plan.features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <li className="list-group-item d-flex heading-color mb-0 icons-center" key={idx}>
                  <Icon className={`me-1 ${!plan.isPopular ? 'text-primary' : 'heading-color'}`} />
                  {feature.title}
                </li>
              )
            })}
          </ul>

          <Link href="" className={`btn  w-100 ${plan.isPopular ? 'btn-primary mb-0' : 'btn-dark'}`}>
            Get started
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default PricingPlanCard
