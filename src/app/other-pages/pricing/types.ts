import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type FeatureType = {
  icon: IconType
  image?: StaticImageData
  title: string
  description?: string
}

export type PricingPlanType = {
  icon: IconType
  badge?: string
  isPopular?: boolean
  title?: string
  description?: string
  price: number
  features: FeatureType[]
  url?: string
}

export type PricingType = {
  duration: 'week' | 'month' | 'year'
  plans: PricingPlanType[]
}

export type ClientType = {
  icon?: string
  image?: StaticImageData
  name?: string
  externalLink?: string
  url?: string
}

export type FaqType = {
  question: string
  answer: string
}
