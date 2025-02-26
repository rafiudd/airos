'use client'

import { AuthProvider } from '@/states/useAuthContext'
import { NotificationProvider } from '@/states/useNotificationContext'
import { ShopProvider } from '@/states/useShoppingContext'
import dynamic from 'next/dynamic'

const LayoutProvider = dynamic(() => import('@/states/useLayoutContext').then((mod) => mod.LayoutProvider), {
  ssr: false,
})


const PageWrapper = ({children}:{children:React.ReactNode}) => {
    return(
        <NotificationProvider>
          <LayoutProvider>
            <AuthProvider>
              <ShopProvider>
                {children}
                </ShopProvider>
            </AuthProvider>
          </LayoutProvider>
        </NotificationProvider>
    )
}

export default PageWrapper