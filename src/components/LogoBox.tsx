import { NavbarBrand } from 'react-bootstrap'
import logoLight from '@/assets/images/logo-airos-white.png'
import logo from '@/assets/images/logo.png'
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
      <Image className={`light-mode-item h-40px ${imageClassName ?? ''} `} src={logo} alt="logo" width={96} height={40} />
      <Image className={`dark-mode-item ${imageClassName ?? ''}`} src={logoLight} alt="logo" width={100} />
    </NavbarBrand>
  )
}

export default LogoBox
