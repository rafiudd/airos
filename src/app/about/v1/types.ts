import { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

export type StatisticType = {
  title: string
  stat: number
  suffix: string
}

export type FeatureType = {
  title: string
  description: string
  icon: ReactNode
}

export type MemberType = {
  name: string
  role: string
  image: StaticImageData
}
