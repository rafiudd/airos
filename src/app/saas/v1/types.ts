import { DateType } from '@/types'
import { UserType } from '@/types/user'
import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

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

export type StatisticType = {
  title: string
  description?: string
  stat: number
  prefix?: string
  suffix?: string
}

export type PricingPlanType = {
  icon?: IconType
  badge?: string
  title?: string
  isPopular?: boolean
  description?: string
  price: number
  features: FeatureType[]
  url?: string
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
