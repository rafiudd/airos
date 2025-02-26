import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type FeatureType = {
  icon: IconType
  image?: StaticImageData
  title: string
  description?: string
}
