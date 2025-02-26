import { Card } from 'react-bootstrap'
import { currency } from '@/states/constants'
import { BsArrowRight } from 'react-icons/bs'
import { PricingPlanType, PricingType } from '../types'
import Link from 'next/link'

type PricingCard2PropsType = {
  plan: PricingPlanType
  duration: PricingType['duration']
}

const PricingCard2 = ({ plan, duration }: PricingCard2PropsType) => {
  return (
    <Card className="card-body p-4 p-sm-5">
      <h5>{plan.title}</h5>
      <p className="small mb-0">{plan.description}</p>
      <hr className="my-4" />
      <p className="heading-color fw-normal mb-2">Quick look at all the features</p>

      {plan.features && (
        <ul className="list-group list-group-borderless mb-2 mb-sm-4">
          {plan.features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <li className="list-group-item d-flex small mb-0 icons-center" key={idx}>
                <Icon className="text-primary me-1" />
                {feature.title}
              </li>
            )
          })}
        </ul>
      )}

      <span className="mb-4 heading-color">
        <span className="h2 plan-price">
          {currency}
          {plan.price}
        </span>
        /{duration}
      </span>

      <Link className="btn btn-primary icon-link icon-link-hover justify-content-center" href="">
        Get started
        <BsArrowRight className="bi" />
      </Link>
    </Card>
  )
}

export default PricingCard2
