import { IconType } from 'react-icons'
import { UserType } from '@/types/user'
import { StaticImageData } from 'next/image'

export type ToolType = {
  icon?: IconType
  image?: StaticImageData
  name?: string
  description?: string
  url?: string
  externalLink?: string
}

export type FeatureType = {
  icon: IconType
  image?: StaticImageData
  title: string
  description?: string
  url?: string
}

export type PricingPlanType = {
  icon?: IconType
  badge?: string
  title?: string
  isPopular?: boolean
  description?: string
  price: number
  features?: FeatureType[]
  url?: string
}

export type PricingType = {
  duration: 'week' | 'month' | 'year'
  plans: PricingPlanType[]
}

export type TestimonialType = {
  userId?: UserType['id']
  user: UserType
  title?: string
  comment: string
  rating?: number
}

export type ClientType = {
  icon?: string
  image?: StaticImageData
  name?: string
  externalLink?: string
  url?: string
}
