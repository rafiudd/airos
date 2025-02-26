import { toggleDocumentAttribute } from '@/utils/layout'
import { type ReactNode, createContext, useContext, useMemo, useState } from 'react'

export type LayoutState = {
  theme: 'light' | 'dark' | 'auto'
}

type LayoutType = LayoutState & {
  updateTheme: (theme: LayoutState['theme']) => void
}

const LayoutContext = createContext<LayoutType | undefined>(undefined)

function useLayoutContext () {
  const context = useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within an LayoutProvider')
  }
  return context
}

const storageThemeKey = 'MIZZLE_THEME_KEY'

const themeKey = 'data-bs-theme'

const LayoutProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const getSavedTheme = (): LayoutState['theme'] => {
    const foundTheme = localStorage.getItem(storageThemeKey)
    const preferredTheme = 'light'
    if (foundTheme) {
      if (foundTheme === 'auto') {
        toggleDocumentAttribute(themeKey, preferredTheme)
        return preferredTheme
      }
      toggleDocumentAttribute(themeKey, foundTheme)
      return foundTheme == 'dark' ? 'dark' : 'light'
    } else {
      localStorage.setItem(storageThemeKey, preferredTheme)
      return preferredTheme
    }
  }

  const INIT_STATE: LayoutState = {
    theme: getSavedTheme()
  }

  const [settings, setSettings] = useState<LayoutState>(INIT_STATE)

  const updateSettings = (_newSettings: Partial<LayoutState>) => setSettings({ ...settings, ..._newSettings })

  const updateTheme = (newTheme: LayoutState['theme']) => {
    const foundTheme = localStorage.getItem(themeKey)
    if (foundTheme !== newTheme) {
      toggleDocumentAttribute(themeKey, newTheme)
      localStorage.setItem(storageThemeKey, newTheme)
      updateSettings({ ...settings, theme: newTheme })
    }
  }


  return (
    <LayoutContext.Provider
      value={
        useMemo(() => ({
          ...settings,
          updateTheme,
        }),
          [settings]
        )}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export { useLayoutContext, LayoutProvider }
