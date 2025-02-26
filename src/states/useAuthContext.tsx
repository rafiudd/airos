'use client'
import type { UserType } from '@/types/user'
import { deleteCookie, hasCookie, setCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useState, type ReactNode } from 'react'

export type AuthContextType = {
  user: UserType | undefined
  isAuthenticated: boolean
  saveSession: (session: UserType) => void
  removeSession: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

const authSessionKey = '_MIZZLE_AUTH_KEY_'

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const router = useRouter()

  const getSession = (): AuthContextType['user'] => {
    const fetchedCookie = getCookie(authSessionKey)?.toString()
    if (!fetchedCookie) return
    else return JSON.parse(fetchedCookie)
  }

  const [user, setUser] = useState<UserType | undefined>(getSession())

  const saveSession = (user: UserType) => {
    setCookie(authSessionKey, JSON.stringify(user))
    setUser(user)
  }

  const removeSession = () => {
    deleteCookie(authSessionKey)
    setUser(undefined)
    router.push('/auth/sign-in')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: hasCookie(authSessionKey) ? true : false,
        saveSession,
        removeSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
