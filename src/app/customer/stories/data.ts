import type { StoryType, TestimonialType } from './types'

import stories1 from '@/assets/images/stories/01.jpg'
import stories3 from '@/assets/images/stories/03.jpg'
import stories4 from '@/assets/images/stories/04.jpg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'

import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'

export const stories: StoryType[] = [
  {
    title: 'Stories of Trust, Transformation, and Triumph',
    image: stories1,
    companyLogo: client2,
  },
  {
    title: 'Empathy in action touching lives through customer experiences',
    image: stories3,
    companyLogo: client3,
  },
  {
    title: 'Our Customer Canvas gallery of stories that resonate',
    image: stories4,
    companyLogo: client4,
  },
]

export const testimonials: TestimonialType[] = [
  {
    comment:
      "We've seen a significant reduction in customer churn since implementing the mizzle - it's been a valuable addition to our customer retention efforts. The AI mizzle has allowed us to scale our customer support efforts without sacrificing quality",
    user: {
      avatar: avatar5,
      firstName: 'Emma',
      lastName: 'Watson',
      role: 'Ceo',
      company: {
        name: 'Blogzine',
        image: client5,
      },
    },
  },
  {
    comment: 'Mizzle is the perfect theme for businesses that want to create a stylish and functional website.',
    user: {
      avatar: avatar3,
      firstName: 'Dennis',
      lastName: 'Barrett',
      role: 'Ceo',
      company: {
        name: 'Blogzine',
        image: client6,
      },
    },
  },
  {
    comment:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    user: {
      avatar: avatar7,
      firstName: 'Louis',
      lastName: 'Ferguson',
      role: 'Ceo',
      company: {
        name: 'Eduport',
        image: client4,
      },
    },
  },
]
