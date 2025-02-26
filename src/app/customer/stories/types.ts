import type { UserType } from '@/types/user'
import { StaticImageData } from 'next/image'

export type StoryType = {
  title: string
  image: StaticImageData
  companyLogo: string
}

export type CompanyType = {
  image: StaticImageData
  name: string
}

type AuthorType = {
  company: CompanyType
} & UserType

export type TestimonialType = {
  user: AuthorType
  comment: string
}
