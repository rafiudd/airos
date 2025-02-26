import { BsDribbble, BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import type { FollowUsType, LocationType, WorkType } from './types'
import webflowImg from '@/assets/images/elements/webflow.svg'
import bootstrapImg from '@/assets/images/elements/bootstrap.svg'
import githubImg from '@/assets/images/elements/github.svg'
import usflagImg from '@/assets/images/flags/us.svg'
import indianflagImg from '@/assets/images/flags/in.svg'

export const followUsIcons: FollowUsType[] = [
  {
    icon: BsFacebook,
    variant: 'text-facebook',
  },
  {
    icon: BsInstagram,
    variant: 'text-instagram',
  },
  {
    icon: BsDribbble,
    variant: 'text-dribbble',
  },
  {
    icon: BsTwitter,
    variant: 'text-twitter',
  },
  {
    icon: BsYoutube,
    variant: 'text-youtube',
  },
]

export const works: WorkType[] = [
  {
    image: webflowImg,
    title: 'Webflow templates',
    description: 'The combination of my passion for design',
  },
  {
    image: bootstrapImg,
    title: 'Bootstrap templates',
    description: 'It drew a hill from my the passion for design',
  },
  {
    image: githubImg,
    title: 'Contribute on Github',
    description: 'Supposing so be resolving breakfast am or perfectly.',
  },
]

export const locations: LocationType[] = [
  {
    countryName: 'United States',
    address: '55/123 Norman street, Banking road, Sydney NSW 5000',
    number: '469-537-2410 (Toll-free)',
    image: usflagImg,
  },
  {
    countryName: 'India',
    address: '55/123 Norman street, Banking road, Sydney NSW 5000',
    number: '469-537-2410 (Toll-free)',
    image: indianflagImg,
  },
]
