import { IconType } from 'react-icons'
import { UserType } from '@/types/user'
import { DateType } from '@/types'
import { StaticImageData } from 'next/image'

export type ClientType = {
  icon?: string
  image?: StaticImageData
  name?: string
  externalLink?: string
  url?: string
}

export type FeatureType = {
  icon?: IconType
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
  features: FeatureType[]
  url: string
}

export type PricingType = {
  duration: 'week' | 'month' | 'year'
  plans: PricingPlanType[]
}

export type BlogType = {
  image?: StaticImageData
  title?: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  publishedBy?: UserType
  publishedAt?: DateType
}
