import Image from 'next/image'
import Link from 'next/link'
import { Card, CardBody, CardFooter } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { ToolType } from '../data'

type IntegrationCardPropsType = {
  tool: ToolType
}

const IntegrationCard = ({ tool }: IntegrationCardPropsType) => {
  return (
    <Card className="card-hover-shadow border-primary-hover border h-100 p-4">
      <CardBody className="p-0">
        <div className="d-flex gap-3 align-items-center mb-3">
          {tool.image && <Image src={tool.image} className="h-40px" width={40} height={40} alt="Integrations-icon" />}
          <h6 className="mb-0">{tool.name}</h6>
        </div>
        <p>{tool.description}</p>
      </CardBody>

      <CardFooter className="bg-transparent p-0 mt-6">
        <Link href={tool.url} className="icon-link icon-link-hover heading-color text-primary-hover stretched-link mb-0">
          View integration
          <BsArrowRight className="bi" />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default IntegrationCard
