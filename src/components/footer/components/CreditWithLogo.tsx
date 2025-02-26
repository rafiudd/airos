import LogoBox from '@/components/LogoBox'
import { currentYear, developedBy, developedByLink } from '@/states/constants'
import Link from 'next/link'

const CreditWithLogo = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-3">
      <LogoBox imageClassName="h-40px" />
      <div className="text-body mt-3 mt-md-0">
        
        Copyrights ©{currentYear} Mizzle. Build by
        <Link href={developedByLink} target="_blank" className="text-body text-primary-hover">
          {developedBy}
        </Link>
        .
      </div>
    </div>
  )
}

export default CreditWithLogo
