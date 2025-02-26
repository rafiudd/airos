import { BsBriefcase, BsBuildings, BsBullseye, BsFire, BsPeople, BsSuitHeart, BsTrophy } from 'react-icons/bs'
import type { CounterType, FeatureType, JobType } from './types'

export const counterData: CounterType[] = [
  {
    icon: BsBriefcase,
    stat: 600,
    label: 'Total Jobs',
    suffix: '+',
  },
  {
    icon: BsBuildings,
    stat: 5468,
    label: 'Total Companies',
  },
  {
    icon: BsPeople,
    stat: 12,
    label: 'Total Candidates',
    suffix: 'K+',
  },
  {
    icon: BsBriefcase,
    stat: 10,
    label: 'New Jobs',
    suffix: '+',
  },
]

export const features: FeatureType[] = [
  {
    title: 'Honesty',
    description: 'The implementation of multilingual support involves.',
    icon: BsSuitHeart,
  },
  {
    title: 'Passion',
    description: 'It focuses on creating an intuitive and efficient design.',
    icon: BsFire,
  },
  {
    title: 'Impact',
    description: 'It ensures that users can access critical assistance whenever they need it.',
    icon: BsBullseye,
  },
  {
    title: 'Recognition',
    description: 'These advanced functionalities are designed to provide users.',
    icon: BsTrophy,
  },
]

export const allJobs: JobType[] = [
  {
    name: 'UI/UX and Product Designer',
    category: 'Information Technology',
    address: 'USA, ontario',
    time: 'Full time',
    salary: '32,000',
  },
  {
    name: 'General Office Manager',
    category: 'Business',
    address: 'USA, New York',
    time: 'Full time',
    salary: '41,000',
  },
  {
    name: 'Machine Learning Specialist',
    category: 'Software',
    address: 'Mumbai, India',
    time: 'Full time',
    salary: '18,000',
  },
  {
    name: 'Senior Product Manager',
    category: 'Information Technology',
    address: 'UK, London',
    time: 'Full time',
    salary: '29,000',
  },
]
