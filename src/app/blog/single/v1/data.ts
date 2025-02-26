import type { UserType } from '@/types/user'

import blogImg1 from '@/assets/images/blog/4by3/01.jpg'
import blogImg2 from '@/assets/images/blog/4by3/02.jpg'
import blogImg3 from '@/assets/images/blog/4by3/03.jpg'
import blogImg4 from '@/assets/images/blog/4by3/04.jpg'
import blogImg5 from '@/assets/images/blog/4by3/05.jpg'
import { StaticImageData } from 'next/image'

export type BlogType = {
  title: string
  publishedBy: UserType
  image: StaticImageData
}

export const blogs: BlogType[] = [
  {
    title: '10 things you need to know about Mizzle',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight',
    },
    image: blogImg1,
  },
  {
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blogImg2,
  },
  {
    title: 'Effortless Web Development with Mizzle',
    publishedBy: {
      firstName: 'Lori',
      lastName: 'Stevens',
    },
    image: blogImg3,
  },
  {
    title: 'Ten questions you should answer truthfully.',
    publishedBy: {
      firstName: 'Louis',
      lastName: 'Crawford',
    },
    image: blogImg4,
  },
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    publishedBy: {
      firstName: 'Joan',
      lastName: 'Wallace',
    },
    image: blogImg5,
  },
]
