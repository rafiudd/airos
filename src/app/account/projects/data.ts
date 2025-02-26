import showcase2 from '@/assets/images/portfolio/showcase/02.jpg'
import showcase4 from '@/assets/images/portfolio/showcase/04.jpg'
import showcase3 from '@/assets/images/portfolio/showcase/03.jpg'
import showcase5 from '@/assets/images/portfolio/showcase/05.jpg'
import { StaticImageData } from 'next/image'

export type ProjectType = {
  image: StaticImageData
  title: string
  status: 'Published' | 'Private'
  category: string
}

export const projectsData: ProjectType[] = [
  {
    image: showcase2,
    title: "Website Optimization for TechWave",
    status: "Published",
    category: "Web design",
  },
  {
    image: showcase4,
    title: "Transforming Ideas into Reality",
    status: "Published",
    category: "Marketing",
  },
  {
    image: showcase3,
    title: "The Art of Storytelling",
    status: "Private",
    category: "Graphics design",
  },
  {
    image: showcase5,
    title: "UI/UX Enhancement for SnapMedia",
    status: "Published",
    category: "UI/UX design",
  }
]