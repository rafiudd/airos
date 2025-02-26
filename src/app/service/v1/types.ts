import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'

export type ServiceType = {
  title: string
  description: string
  icon: ReactNode
}

export type FeatureType = {
  title: string
  description: string
  icon: IconType
}
