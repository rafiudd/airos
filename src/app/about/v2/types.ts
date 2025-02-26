import type { UserType } from '@/types/user'
import { StaticImageData } from 'next/image'

export type CompanyType = {
  icon?: string
  image?: StaticImageData
  name: string
  externalLink?: string
  url?: string
}

type AuthorType = {
  company?: CompanyType
} & UserType

export type TestimonialType = {
  user: AuthorType
  comment: string
  rating: number
}

export type LocationType = {
  name: string
  image: StaticImageData
  address: string
  number: string
}

export type FAQType = {
  question: string
  answer: string
}
