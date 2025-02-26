import { Card, CardBody, CardFooter, CardTitle } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { FaAngleRight } from 'react-icons/fa6'
import { HelpType } from '../types'
import Link from 'next/link'

type HelpCardPropsType = {
  help: HelpType
}

const HelpCard = ({ help }: HelpCardPropsType) => {
  const Icon = help.icon

  return (
    <Card className="border p-4 h-100">
      <CardBody className="p-0">
        <div className="icon-md bg-primary text-white rounded flex-shrink-0 mb-3 flex-centered">
          <Icon className="fs-6"></Icon>
        </div>

        <CardTitle as={'h6'} className="mb-3">
          {help.title}
        </CardTitle>

        <ul className="nav flex-column">
          {help.content.map((item, idx) => (
            <li className="nav-item" key={idx}>
              <Link className="nav-link icons-center gap-1" href={help.url ?? ''}>
                <FaAngleRight size={18} className="pt-1 ms-0 mb-1" />
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </CardBody>

      <CardFooter className="p-0 pt-3">
        <Link className="icon-link icon-link-hover" href={help.url ?? ''}>
          View all articles
          <BsArrowRight className="bi" />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default HelpCard
