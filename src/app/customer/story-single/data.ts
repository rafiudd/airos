import stories1 from '@/assets/images/stories/01.jpg'
import stories3 from '@/assets/images/stories/03.jpg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import { StaticImageData } from 'next/image'

export type StoryType = {
  title: string
  image: StaticImageData
  companyLogo: string
}

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
]
