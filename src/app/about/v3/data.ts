import { rocketIcon2, solutionIcon, ufoIcon } from '@/assets/data/icons'
import type { FeatureType, MemberType, StepType, TestimonialType } from './types'

import team1 from '@/assets/images/team/4by4/01.jpg'
import team2 from '@/assets/images/team/4by4/02.jpg'
import team3 from '@/assets/images/team/4by4/03.jpg'
import team4 from '@/assets/images/team/4by4/04.jpg'
import team5 from '@/assets/images/team/4by4/05.jpg'
import team6 from '@/assets/images/team/4by4/06.jpg'

import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'

export const features: FeatureType[] = [
  {
    title: 'Innovative Solutions',
    description: 'We pride ourselves on crafting innovative software solutions that address real-world challenges and drive digital transformation.',
    icon: solutionIcon,
  },
  {
    title: 'Client-Centric Approach',
    description: 'Our client-centric approach ensures that we understand your unique needs and provide tailored solutions that exceed expectations.',
    icon: ufoIcon,
  },
  {
    title: 'Experienced Team',
    description: 'Our team of experienced professionals is committed to delivering excellence and quality in every project we undertake.',
    icon: rocketIcon2,
  },
]

export const teamMembers: MemberType[] = [
  {
    firstName: 'Emma',
    lastName: 'Watson',
    role: 'Founder',
    image: team1,
  },
  {
    firstName: 'Allen',
    lastName: 'Smith',
    role: 'UI/UX designer',
    image: team2,
  },
  {
    firstName: 'Jacqueline',
    lastName: 'Miller',
    role: 'Human Resource',
    image: team3,
  },
  {
    firstName: 'Frances',
    lastName: 'Guerrero',
    role: 'Software Developer',
    image: team4,
  },
  {
    firstName: 'Samuel',
    lastName: 'Bishop',
    role: 'Product designer',
    image: team5,
  },
  {
    firstName: 'Amanda',
    lastName: 'Reed',
    role: 'Content writer',
    image: team6,
  },
]

export const installationSteps: StepType[] = [
  {
    stepNumber: '01',
    title: "Navigate to the 'Download' Page",
  },
  {
    stepNumber: '02',
    title: 'Choose Your Plan',
  },
  {
    stepNumber: '03',
    title: 'Create an Account',
  },
  {
    stepNumber: '04',
    title: 'Sign In and Start Using',
  },
]

export const testimonials: TestimonialType[] = [
  {
    comment:
      'Mizzle is the perfect theme for businesses that want to create a stylish and functional website. Supposing so be resolving breakfast am or perfectly.',
    user: {
      firstName: 'Dennis',
      lastName: 'Barrett',
      avatar: avatar4,
      role: 'CEO and manager',
      companyName: 'Mizzle',
    },
    rating: 4.5,
  },
  {
    comment: 'Stackbros helped us create a stunning website that reflects our brand perfectly. At weddings believed laughing',
    user: {
      firstName: 'Samuel',
      lastName: 'Bishop',
      avatar: avatar1,
      role: 'Manager',
      companyName: 'Mizzle',
    },
    rating: 4.5,
  },
  {
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need. Resolving breakfast am or perfectly.",
    user: {
      firstName: 'Amanda',
      lastName: 'Reed',
      avatar: avatar5,
      role: 'Content writer',
    },
    rating: 4.5,
  },
]
