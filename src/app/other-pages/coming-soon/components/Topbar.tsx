import LogoBox from '@/components/LogoBox'
import StickyHeader from '@/components/topbar/AppMenu/StickyHeader'
import { buyLink } from '@/states/constants'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

const Topbar = () => {
  return (
    <StickyHeader>
      <nav className="navbar navbar-expand-xl">
        <Container>
          <LogoBox />
          <div className="nav align-items-center ms-2">
            <Link href={buyLink} target="_blank" className="btn btn-sm btn-dark mb-0">
              Buy now!
            </Link>
          </div>
        </Container>
      </nav>
    </StickyHeader>
  )
}

export default Topbar
