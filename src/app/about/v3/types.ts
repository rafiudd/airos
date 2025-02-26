import type { UserType } from '@/types/user'
import { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

export type FeatureType = {
  title: string
  description: string
  icon: ReactNode
}

export type MemberType = {
  firstName: string
  lastName: string
  role: string
  image: StaticImageData
}

export type StepType = {
  stepNumber: string
  title: string
}

type AuthorType = {
  companyName?: string
} & UserType

export type TestimonialType = {
  user: AuthorType
  comment: string
  rating: number
}
