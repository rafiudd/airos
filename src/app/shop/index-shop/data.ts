import { bagIcon, bookIcon, electronicIcon, fashionIcon, gameIcon, mobileIcon } from '@/assets/data/icons'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { BsFire, BsHeadset, BsLightningChargeFill, BsRadar } from 'react-icons/bs'
import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import client7 from '@/assets/images/client/07.svg'
import client8 from '@/assets/images/client/08.svg'
import { ClientType } from './types'

export type CategoryType = {
  id: string
  icon: ReactNode
  name: string
  url: string
}

export type ShopFeatureType = {
  title: string
  description: string
  icon: IconType
  variantClassName: string
}

export const featuredCategoriesData: CategoryType[] = [
  {
    id: '1',
    name: 'Fashion',
    icon: fashionIcon,
    url: '',
  },
  {
    id: '2',
    name: 'Electronics',
    icon: electronicIcon,
    url: '',
  },
  {
    id: '3',
    name: 'Games',
    icon: gameIcon,
    url: '',
  },
  {
    id: '4',
    name: 'Books',
    icon: bookIcon,
    url: '',
  },
  {
    id: '5',
    name: 'Mobiles',
    icon: mobileIcon,
    url: '',
  },
  {
    id: '6',
    name: 'Bags',
    icon: bagIcon,
    url: '',
  },
]

export const shopFeatures: ShopFeatureType[] = [
  {
    title: 'Fast and reliable delivery',
    description: 'Ensure timely and dependable delivery services to meet customer expectations.',
    icon: BsLightningChargeFill,
    variantClassName: 'bg-info text-info',
  },
  {
    title: 'Package tracking',
    description: 'Offer real-time tracking information, so customers can monitor the status of their shipments.',
    icon: BsRadar,
    variantClassName: 'bg-warning text-warning',
  },
  {
    title: 'Returns and exchanges',
    description: 'Clearly outline your return and exchange policy, making it easy for customers to initiate returns.',
    icon: BsFire,
    variantClassName: 'bg-danger text-danger',
  },
  {
    title: 'Customer support',
    description: 'Provide responsive customer support to address shipping-related queries and issues.',
    icon: BsHeadset,
    variantClassName: 'bg-primary text-primary ',
  },
]

export const brands: ClientType[] = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client5 },
  { image: client6 },
  { image: client7 },
  { image: client8 },
]
