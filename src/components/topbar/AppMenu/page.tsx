import { Suspense, useCallback, useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'

import { findAllParent, findMenuItem, getAppMenuItems, getMenuItemFromURL } from '@/helpers/menu'
import type { MenuItemType } from '@/types/menu'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DemosMenuDropdown = dynamic(() => import('./DemosMenuDropdown'))
const PagesMenuDropdown = dynamic(() => import('./PagesMenuDropdown'))
const ResourcesMenuDropdown = dynamic(() => import('./ResourcesMenuDropdown'))
const PortfolioMenuDropdown = dynamic(() => import('./PortfolioMenuDropdown'))
const MegaMenuDropdown = dynamic(() => import('./MegaMenuDropdown'))

export type AppMenuProps = {
  mobileMenuOpen: boolean
  showMegaMenu?: boolean
  showResourceMenu?: boolean
  showContactUs?: boolean
  showDocs?: boolean
  ulClassName?: string
}

const loading = () => <div></div>

const AppMenu = ({ mobileMenuOpen, ulClassName, showMegaMenu, showResourceMenu, showContactUs, showDocs }: AppMenuProps) => {
  const pathname = usePathname()
  const [activeMenuItems, setActiveMenuItems] = useState<string[]>([])


  const menuItems: MenuItemType[] = getAppMenuItems()
  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    // const trimmedURL = pathname?.replaceAll(basePath !== '' ? basePath : '', '/')

    const trimmedURL = pathname?.replaceAll('','')
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)

    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)])
      }
    }
  }, [pathname, menuItems])

  useEffect(() => {
    activeMenu()
  }, [pathname, menuItems])



  return (
    <Collapse in={mobileMenuOpen} className="navbar-collapse">
      <div>
        <ul className={`navbar-nav navbar-nav-scroll ${ulClassName ?? ''}`}>
          <Suspense fallback={loading()}>
            <DemosMenuDropdown menuItems={menuItems[0].children!} activeMenuItems={activeMenuItems} />
          </Suspense>

          <Suspense fallback={loading()}>
            <PagesMenuDropdown menuItems={menuItems[1].children!} activeMenuItems={activeMenuItems} />
          </Suspense>

          {showResourceMenu && (
            <Suspense fallback={loading()}>
              <ResourcesMenuDropdown />
            </Suspense>
          )}

          <Suspense fallback={loading()}>
            <PortfolioMenuDropdown menuItems={menuItems[2].children!} activeMenuItems={activeMenuItems} />
          </Suspense>

          {showMegaMenu && (
            <Suspense fallback={loading()}>
              <MegaMenuDropdown />
            </Suspense>
          )}

          {showDocs && (
            <li className="nav-item">
              <Link className="nav-link" href="/blog">
                Artikel
              </Link>
            </li>
          )}

          {showContactUs && (
            <li className="nav-item">
              <Link className="nav-link" href="/contact/v1">
                Hubungi Kami
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Collapse>
  )
}

export default AppMenu
