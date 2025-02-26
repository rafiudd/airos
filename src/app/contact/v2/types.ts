import { StaticImageData } from 'next/image'
import type { IconType } from 'react-icons'

export type FollowUsType = {
  icon: IconType
  variant: string
}

export type WorkType = {
  title: string
  description: string
  image: StaticImageData
}

export type LocationType = {
  countryName: string
  address: string
  number: string
  image: StaticImageData
}
