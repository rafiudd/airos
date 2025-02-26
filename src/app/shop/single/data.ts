import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import { StaticImageData } from 'next/image'

export type ReviewType = {
  name: string
  description: string
  date: string
  rating: number
  avatar: StaticImageData
}

export const reviews: ReviewType[] = [
  {
    name: 'Allen Smith',
    description:
      'Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. ',
    date: 'June 11, 2022, at 6:01 am',
    rating: 4.5,
    avatar: avatar1,
  },
  {
    name: 'Louis Ferguson',
    description: 'Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. ',
    date: 'June 14, 2022, at 6:01 am',
    rating: 4.5,
    avatar: avatar2,
  },
]
