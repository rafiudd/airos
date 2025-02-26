import type { ShowcaseCardProps } from '@/components/cards/ShowcaseCard'

import client1 from '@/assets/images/client/client-white/01.svg'
import client3 from '@/assets/images/client/client-white/03.svg'
import client4 from '@/assets/images/client/client-white/04.svg'

import portfolioImg2 from '@/assets/images/portfolio/showcase/02.jpg'
import portfolioImg3 from '@/assets/images/portfolio/showcase/03.jpg'
import portfolioImg5 from '@/assets/images/portfolio/showcase/05.jpg'

export const relatedWorks: ShowcaseCardProps[] = [
  {
    title: 'Brushstrokes and Beyond',
    subTitle: 'UI/UX design',
    brandImage: client3,
    image: portfolioImg3,
    link: '/portfolio/case-study/v2',
  },
  {
    title: 'Ceremony Worthy of Time',
    subTitle: 'Web design',
    brandImage: client4,
    image: portfolioImg2,
    link: '/portfolio/case-study/v1',
  },
  {
    title: 'The Art of Storytelling',
    subTitle: 'Graphics design',
    brandImage: client1,
    image: portfolioImg5,
    link: '/portfolio/case-study/v2',
  },
]
