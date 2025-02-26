import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type ClientType = {
  icon?: string
  image?: StaticImageData
  name?: string
  externalLink?: string
  url?: string
}

export type StatisticType = {
  title: string
  description?: string
  stat: number
  prefix?: string
  suffix?: string
}

export type FeatureType = {
  icon: ReactNode
  image?: StaticImageData
  title: string
  description?: string
  url?: string
}
