import type { UserType } from '@/types/user'
import { StaticImageData } from 'next/image'

export type BlogCategoryType = {
  category: string
  image: StaticImageData
}

export type BlogType = {
  title: string
  publishedBy: UserType
  category: string
  image: StaticImageData
  isSponsored?: boolean
}
