import type { UserType } from '@/types/user'
import type { IconType } from 'react-icons'

export type MemberType = {
  socialMedia: {
    icon: IconType
    variant: string
  }[]
  user: UserType
}
