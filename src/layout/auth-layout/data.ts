import auth1Img from '@/assets/images/auth/01.jpg'
import auth2Img from '@/assets/images/auth/02.jpg'
import auth3Img from '@/assets/images/auth/03.jpg'
import { StaticImageData } from 'next/image'

type QuoteSlideType = {
  image: StaticImageData
  quote: string
  author: string
  position: string
}

export const quotesData: QuoteSlideType[] = [
  {
    image: auth1Img,
    quote: 'With unwavering determination, they navigate the complexities of the industry, forging strategic partnerships and driving transformative change.',
    author: 'Emma Watson',
    position: 'Founder, catalog'
  },
  {
    image: auth2Img,
    quote: 'An exceptional agency CEO is a visionary, constantly pushing the boundaries of creativity and pushing their team to new heights. They inspire with their passion and cultivate a culture of trust and respect.',
    author: 'Carolyn Ortiz',
    position: 'CEO, mizzle'
  },
  {
    image: auth3Img,
    quote: 'Through collaboration and strategic direction, they steer the agency towards its goals, navigating the ever-evolving landscape with agility and grace.',
    author: 'Dennis Barrett',
    position: 'Founder, catalog'
  },
]