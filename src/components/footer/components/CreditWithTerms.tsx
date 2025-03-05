import { currentYear, developedBy, developedByLink } from '@/states/constants'
import Link from 'next/link'

const CreditWithTerms = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
      <div className="text-body">
        Copyrights ©{currentYear} Build by 
        <Link href={developedByLink} target="_blank" className="text-body text-primary-hover">
          {developedBy}
        </Link>
      </div>
    </div>
  )
}

export default CreditWithTerms
