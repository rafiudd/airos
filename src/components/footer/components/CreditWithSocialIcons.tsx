import { socialMediaLinks } from '@/assets/data/footer-items'
import { currentYear, developedBy, developedByLink } from '@/states/constants'
import Link from 'next/link'

const CreditWithSocialIcons = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
      <div className="text-body mb-3 mb-md-0">
        
        Copyrights ©{currentYear} Mizzle. Build by
        <Link href={developedByLink} target="_blank" className="text-body text-primary-hover">
          {developedBy}
        </Link>
        .
      </div>
      <ul className="list-inline mb-0">
        {socialMediaLinks.map((item, idx) => {
          const Icon = item.icon
          return (
            <li key={item.iconClassName + idx} className="list-inline-item pe-1">
              <Link className="btn btn-xs btn-icon btn-light" href="">
                <Icon />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CreditWithSocialIcons
