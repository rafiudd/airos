import Link from 'next/link'
import { Card } from 'react-bootstrap'
import { PricingPlanType } from '../types'

type PricingCardPropsType = {
  plan: PricingPlanType
}

const PricingCard = ({ plan }: PricingCardPropsType) => {
  return (
    <Card className="card-body border rounded p-md-4" data-bs-theme={plan.isPopular && 'dark'}>
      <h6 className={plan.isPopular ? 'mb-2 text-primary' : 'mb-2'}>{plan.title}</h6>

      <div className="d-flex align-items-center">
        <span className="h1 mb-0">${plan.price}</span>
        <div className="ms-3">
          <p className="heading-color mb-0">Per user</p>
          <p className="heading-color mb-0">Per month</p>
        </div>
      </div>
      <span>Basic feature for up to 10 users</span>

      <Link href="" className={plan.isPopular ? 'btn btn-primary mt-4' : 'btn btn-dark mt-4'}>
        Get started
      </Link>
      <Link href="" className={`btn btn-outline-${plan.isPopular ? 'white' : 'light'}`}>
        Chat to sales
      </Link>

      <hr className="my-4" />

      <h6 className="mb-0">Features</h6>
      <span>Everything in basic plan</span>

      <ul className="list-group list-group-borderless border-0 mb-0 mt-2">
        {plan.features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <li className="list-group-item d-flex mb-0 icons-center" key={idx}>
              {Icon && <Icon className="text-primary me-2" />}
              {feature.title}
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default PricingCard
