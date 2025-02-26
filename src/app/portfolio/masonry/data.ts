import masonry1 from '@/assets/images/portfolio/masonry/01.jpg'
import masonry2 from '@/assets/images/portfolio/masonry/02.jpg'
import masonry3 from '@/assets/images/portfolio/masonry/03.jpg'
import masonry4 from '@/assets/images/portfolio/masonry/04.jpg'
import masonry5 from '@/assets/images/portfolio/masonry/05.jpg'
import masonry6 from '@/assets/images/portfolio/masonry/06.jpg'
import masonry7 from '@/assets/images/portfolio/masonry/07.jpg'
import masonry8 from '@/assets/images/portfolio/masonry/08.jpg'
import masonry9 from '@/assets/images/portfolio/masonry/09.jpg'
import { StaticImageData } from 'next/image'

export type PortfolioMasonryType = {
  title: string
  subTitle: string
  image: StaticImageData
  categories: string[]
}

export const categoriesData = [
  {
    title: 'All Work',
    name: '*',
  },
  {
    title: 'Marketing',
    name: '.marketing',
  },
  {
    title: 'Web design',
    name: '.design',
  },
  {
    title: 'Development',
    name: '.business',
  },
  {
    title: 'Brand Design',
    name: '.brand',
  },
  {
    title: 'UI/UX design',
    name: '.ui',
  },
]

export const portfolioMasonryData: PortfolioMasonryType[] = [
  {
    title: 'Dynamic Workflows Website',
    subTitle: 'UI/UX design ',
    image: masonry1,
    categories: ['business', 'brand', 'marketing'],
  },
  {
    title: 'ElevateTech Redesign',
    subTitle: 'brand design',
    image: masonry4,
    categories: ['brand', 'ui'],
  },
  {
    title: 'UI/UX Enhancement for SnapMediae',
    subTitle: 'UI/UX design',
    image: masonry9,
    categories: ['ui'],
  },
  {
    title: 'Sustainability Initiative',
    subTitle: 'Business dev',
    image: masonry5,
    categories: ['design', 'marketing'],
  },
  {
    title: 'User-Centric Redesign',
    subTitle: 'Web design',
    image: masonry2,
    categories: ['business', 'design', 'brand'],
  },
  {
    title: 'Website Optimization for TechWave',
    subTitle: 'Web design',
    image: masonry7,
    categories: ['business', 'design', 'brand'],
  },
  {
    title: 'E-commerce Expansion',
    subTitle: 'Digital Marketing',
    image: masonry6,
    categories: ['business', 'design'],
  },
  {
    title: 'A Triumph of Software',
    subTitle: 'Digital Marketing',
    image: masonry8,
    categories: ['business', 'design'],
  },
  {
    title: 'Social Media Engagement',
    subTitle: 'UI/UX design',
    image: masonry3,
    categories: ['ui'],
  },
]
