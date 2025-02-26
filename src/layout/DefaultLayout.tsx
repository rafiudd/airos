import Preloader  from '@/components/Preloader'
import { Suspense, type ReactNode } from 'react'

const DefaultLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <Suspense fallback={<Preloader />}>{children}</Suspense>
}

export default DefaultLayout
