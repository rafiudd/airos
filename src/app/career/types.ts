import type { IconType } from 'react-icons'

export type CounterType = {
  icon: IconType
  stat: number
  label: string
  suffix?: string
}

export type FeatureType = {
  title: string
  description: string
  icon: IconType
}

export type JobType = {
  name: string
  category: string
  address: string
  time: string
  salary: string
}
