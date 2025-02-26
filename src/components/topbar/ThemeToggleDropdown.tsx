'use client'

import { useLayoutContext, type LayoutState } from '@/states/useLayoutContext'
import { toSentenceCase } from '@/utils/change-casing'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import type { IconType } from 'react-icons'
import { BsBrightnessHighFill, BsCircleHalf, BsMoonStarsFill } from 'react-icons/bs'

type ThemeModeType = {
  theme: LayoutState['theme']
  icon: IconType
}

const themeModes: ThemeModeType[] = [
  {
    icon: BsBrightnessHighFill,
    theme: 'light',
  },
  {
    icon: BsMoonStarsFill,
    theme: 'dark',
  },
  {
    icon: BsCircleHalf,
    theme: 'auto',
  },
]

const ThemeToggleDropdown = () => {
  const { theme, updateTheme } = useLayoutContext()

  return (
    <Dropdown as={'li'} className="nav-item dropdown-animation" align="end">
      <DropdownToggle
        variant="link"
        className="btn btn-link arrow-none mb-0 px-2 lh-1"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        data-bs-display="static">
        <BsCircleHalf size={20} className="theme-icon-active fill-mode" />
      </DropdownToggle>
      <DropdownMenu as="ul" className="min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
        {(themeModes || []).map((mode) => {
          const Icon = mode.icon
         
          return (
            <li key={mode.theme} className="mb-1">
              <DropdownItem
                as="button"
                className={`d-flex align-items-center${mode.theme === theme ? ' active' : ''}`}
                data-bs-theme-value={mode.theme}
                onClick={() => updateTheme(mode.theme)}>
                <Icon className="mode-switch me-1" size={16} />
                {toSentenceCase(mode.theme)}
              </DropdownItem>
            </li>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

export default ThemeToggleDropdown
