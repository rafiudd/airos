'use client'
import LogoBox from '@/components/LogoBox'
import AppMenu, { type AppMenuProps } from '@/components/topbar/AppMenu/page'
import StickyHeader from '@/components/topbar/AppMenu/StickyHeader'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler'
import useToggle from '@/hooks/useToggle'
import { buyLink } from '@/states/constants'
import Link from 'next/link'
import { Suspense, type ReactNode } from 'react'
import { Button, Container, type ButtonProps } from 'react-bootstrap'
import { BsPersonCircle } from 'react-icons/bs'
import FloatingSearch from './FloatingSearch'
import SearchInput from './SearchInput'
import ShoppingCartOffcanvas from './ShoppingCartOffcanvas'
import ThemeToggleDropdown from './ThemeToggleDropdown'

type TopNavigationBarProps = {
  containerFluid?: boolean
  showSignUp?: boolean
  showBuyNow?: boolean
  showSearchInput?: boolean
  showShoppingCart?: boolean
  showFloatingSearch?: boolean
  hideThemeToggler?: boolean
  darkButton?: { text: string; size?: ButtonProps['size'] }
  navClassName?: string
  menuProps?: Omit<AppMenuProps, 'mobileMenuOpen'>
  children?: ReactNode
}

const TopNavigationBar = ({
  showBuyNow,
  showSignUp,
  showSearchInput,
  showShoppingCart,
  navClassName,
  hideThemeToggler,
  darkButton,
  showFloatingSearch,
  menuProps,
  containerFluid,
  children,
  ...props
}: TopNavigationBarProps) => {
  const { isTrue: isMenuOpen, toggle: toggleMenu } = useToggle(window.innerWidth >= 1200)

  return (
    <StickyHeader className="header-absolute" {...props}>
      {children}
      <nav className={`navbar navbar-expand-xl ${navClassName ?? ''}`}>
        <Container fluid={containerFluid}>
          <LogoBox className="me-0" />

          <Suspense>
            <AppMenu mobileMenuOpen={isMenuOpen} {...menuProps} />
          </Suspense>

          <ul className="nav align-items-center ms-sm-2">
            {/* <Suspense>{!hideThemeToggler && <ThemeToggleDropdown />}</Suspense> */}

           
            <li className="nav-item">
              <MobileNavbarToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </li>
          </ul>
        </Container>
      </nav>
    </StickyHeader>
  )
}

export default TopNavigationBar
