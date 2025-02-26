import { IconType } from 'react-icons'
import { UserType } from '@/types/user'
import { DateType } from '@/types'
import { StaticImageData } from 'next/image'

export type ClientType = {
  icon?: string
  image?: StaticImageData
  name?: string
  externalLink?: string
  url?: string
}

export type WorkFlowStepType = {
  image: StaticImageData
  stepNumber?: number
  icon?: IconType
  title: string
  description: string
}

export type ToolType = {
  icon?: IconType
  image?: StaticImageData
  name?: string
  description?: string
  url: string
  externalLink?: string
}

export type StatisticType = {
  title: string
  description?: string
  stat: number
  prefix?: string
  suffix?: string
}

export type CompanyType = {
  icon?: string
  image?: StaticImageData
  name?: string
  externalLink?: string
  url?: string
}

type AuthorType = {
  company: CompanyType
} & UserType

export type TestimonialType = {
  userId?: AuthorType['id']
  user: AuthorType
  title?: string
  comment: string
  rating?: number
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
