import { BsEarbuds, BsFire, BsPatchCheckFill, BsShieldFillCheck, BsTruck } from 'react-icons/bs'
import { ProductType } from '@/types/shop'

import product3 from '@/assets/images/products/airos-500.png'
import product4 from '@/assets/images/products/04.png'
import product5 from '@/assets/images/products/05.png'
import { FeatureType } from './types'

export const features: FeatureType[] = [
  {
    icon: BsPatchCheckFill,
    title: 'Produk Berkualitas Tinggi',
  },
  {
    icon: BsPatchCheckFill,
    title: 'Dukungan Branding & Marketing',
  },
  {
    icon: BsPatchCheckFill,
    title: 'Sistem Distribusi Optimal',
  },
  {
    icon: BsPatchCheckFill,
    title: 'Jaringan yang Luas',
  },
  {
    icon: BsPatchCheckFill,
    title: 'Kemitraan Jangka Panjang',
  },
]

export const products: ProductType[] = [
  {
    id: '1',
    name: 'AiROS 500 ml',
    price: 305,
    sale: {
      type: 'percent',
      discount: 25,
    },
    images: [product3],
    url: '',
  },
  {
    id: '2',
    name: 'AiROS 330 ml',
    price: 350,
    images: [product3],
    url: '',
  },
  {
    id: '2',
    name: 'AiROS 330 ml',
    price: 350,
    images: [product3],
    url: '',
  },
  {
    id: '2',
    name: 'AiROS 330 ml',
    price: 350,
    images: [product3],
    url: '',
  },
  {
    id: '2',
    name: 'AiROS 330 ml',
    price: 350,
    images: [product3],
    url: '',
  },
]

export const features2: FeatureType[] = [
  {
    title: 'Seamless Connectivity',
    description: 'Effortlessly pair your AirPods with your devices for a hassle-free listening.',
    icon: BsFire,
  },
  {
    title: 'Get flexible delivery',
    description: 'Get free delivery or pickup at your Airpods store.',
    icon: BsTruck,
  },
  {
    title: 'Accessories and Customization',
    description: 'Explore a range of accessories and customization options to your AirPods.',
    icon: BsEarbuds,
  },
  {
    title: 'Worry-Free Warranty',
    description: 'Rest easy with a comprehensive warranty that covers your AirPods against defects.',
    icon: BsShieldFillCheck,
  },
]
