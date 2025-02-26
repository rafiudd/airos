import { IconType } from 'react-icons'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export type LinkedType = {
  name: string
  description: string
  icon: IconType
  isActive: boolean
  variant?: string
}

export const linkedAccount: LinkedType[] = [
  {
    name: 'Google',
    description: 'You are successfully connected to your Google account',
    icon: FcGoogle,
    isActive: true,
    variant: 'text-google-icon',
  },
  {
    name: 'Linkedin',
    description: 'Connect with Linkedin account for a personalized experience',
    icon: FaLinkedinIn,
    isActive: false,
    variant: 'text-linkedin',
  },
  {
    name: 'Facebook',
    description: 'Connect with Facebook account for a personalized experience',
    icon: FaFacebook,
    isActive: false,
    variant: 'text-facebook',
  },
]
