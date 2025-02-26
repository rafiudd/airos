import { NavbarBrand } from 'react-bootstrap'
import logoLight from '@/assets/images/logo-light.svg'
import logo from '@/assets/images/logo.svg'
import logoSmall from '@/assets/images/logo-icon.svg'
import Image from 'next/image'
import Link from 'next/link'

type LogoBoxProps = {
  className?: string
  smallIcon?: boolean
  imageClassName?: string
}

const LogoBox = ({ className, smallIcon, imageClassName }: LogoBoxProps) => {
  return smallIcon ? (
    <Image src={logoSmall} className={className ?? ''} alt="logo"  />
  ) : (
    <NavbarBrand as={Link} className={className ?? ''} href="">
      <Image className={`light-mode-item h-40px ${imageClassName ?? ''} `} src={logo} alt="logo" width={119} height={40} />
      <Image className={`dark-mode-item h-40px ${imageClassName ?? ''}`} src={logoLight} alt="logo" width={119} height={40} />
    </NavbarBrand>
  )
}

export default LogoBox
