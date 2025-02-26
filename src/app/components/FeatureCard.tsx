import { Card } from 'react-bootstrap'
import { FeatureType } from '../types'

type FeatureCardPropsType = {
  feature: FeatureType
}

const FeatureCard = ({ feature }: FeatureCardPropsType) => {
  const Icon = feature.icon
  return (
    <Card className="card-body bg-transparent p-0">
      <div className="icon-md bg-primary bg-opacity-10 text-primary rounded mb-3 flex-centered">
        <Icon className="fa-xl" size={19} />
      </div>
      <h6 className="mb-2">{feature.title}</h6>
      <p className="mb-0">{feature.description}</p>
    </Card>
  )
}

export default FeatureCard
