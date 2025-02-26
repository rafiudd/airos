import type { UserType } from '@/types/user'
import { StaticImageData } from 'next/image'

export type BlogType = {
  title: string
  description?: string
  publishedBy: UserType
  category: string
  image: StaticImageData
  date?: string
  time?: string
}
