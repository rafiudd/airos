import type { CategoryType, ProductType } from '@/types/shop'

import phoneImg6 from '@/assets/images/shop/review/06.jpg'
import phoneImg2 from '@/assets/images/shop/review/02.jpg'
import phoneImg1 from '@/assets/images/shop/review/01.jpg'
import phoneImg5 from '@/assets/images/shop/review/05.jpg'

import product1 from '@/assets/images/shop/01.png'
import product2 from '@/assets/images/shop/02.png'
import product3 from '@/assets/images/shop/03.png'
import product4 from '@/assets/images/shop/04.png'
import product5 from '@/assets/images/shop/05.png'
import product6 from '@/assets/images/shop/06.png'
import product7 from '@/assets/images/shop/07.png'
import product8 from '@/assets/images/shop/08.png'
import product9 from '@/assets/images/shop/09.png'
import product10 from '@/assets/images/shop/10.png'

const categories: CategoryType[] = [
  {
    id: 'cat1',
    name: 'Category 1',
  },
]

export const products: ProductType[] = [
  {
    id: '1001',
    categoryId: categories[0].id,
    category: categories[0],
    name: 'The ultimate smartphone for modern lifestyles',
    images: [phoneImg6, phoneImg2, phoneImg1, phoneImg5],
    price: 215,
    sale: { discount: 20, type: 'percent' },
    stock: 100,
    attributes: {
      colors: [{ name: 'Purple' }],
    },
    tag: 'Technology',
    review: {
      count: 345,
      stars: 4.5,
    },
  },
  {
    id: '1002',
    name: 'Round neck cotton t-shirt',
    images: [product2],
    price: 103,
    attributes: {
      colors: [{ name: 'Midblue' }],
      gender: 'Male',
      size: ' XL, L, M, S',
    },
  },
  {
    id: '1003',
    name: 'Mizz dunk low shoes',
    images: [product8],
    price: 103,
    attributes: {
      gender: 'Male',
      size: '42',
    },
  },
]

export const trendingProducts: ProductType[] = [
  {
    id: '1010',
    name: 'Classic round neck t-shirt',
    price: 103,
    tag: 'Featured',
    images: [product2],
    review: {
      stars: 4.5,
    },
    url: '/shop/single',
  },
  {
    id: '1011',
    name: 'Premium cotton baseball cap',
    price: 98,
    images: [product3],
    review: {
      stars: 4.5,
    },
    url: '/shop/single',
  },
  {
    id: '1012',
    name: 'High performance headphones with Noise cancellation',
    price: 180,
    images: [product4],
    sale: { discount: 30, type: 'percent' },
    review: {
      stars: 4.5,
    },
    url: '/shop/single',
  },
  {
    id: '1013',
    name: 'Premium stainless steel water bottle',
    price: 40,
    images: [product1],
    review: {
      stars: 4.5,
    },
    url: '/shop/single',
  },
  {
    id: '1014',
    name: 'The ultimate smartphone for modern lifestyles',
    price: 215,
    images: [product5],
    review: {
      stars: 4.5,
    },
    url: '/shop/single',
  },
  {
    id: '1015',
    name: 'Vintage inspired bluetooth radio speaker',
    price: 142,
    images: [product6],
    review: {
      stars: 4.5,
    },
    url: '/shop/single',
  },
]

export const footwearCollection: ProductType[] = [
  {
    id: '1021',
    images: [product8],
    name: 'Mizz dunk low',
    description: "Man's training shoes",
    price: 180.0,
    review: {
      count: 1,
      stars: 4.5,
    },
    sale: { discount: 30, type: 'percent' },
  },
  {
    id: '1022',
    images: [product9],
    name: 'Mizz metcon russell',
    description: "Woman's training shoes",
    price: 160.0,
    review: {
      count: 1,
      stars: 4.5,
    },
    sale: { discount: 20, type: 'percent' },
  },
  {
    id: '1023',
    images: [product7],
    name: 'Air Max Pulse Roam',
    description: "Man's sports and casual wear",
    price: 245.0,
    review: {
      count: 1,
      stars: 4.5,
    },
  },
  {
    id: '1024',
    images: [product10],
    name: 'Jordan victori once',
    description: "Man's printed slides",
    price: 86.0,
    sale: { discount: 45, type: 'percent' },
    review: {
      count: 1,
      stars: 4.5,
    },
  },
]

export const productGrid: ProductType[] = [
  {
    id: '1030',
    name: 'Classic round neck t-shirt',
    price: 103.0,
    tag: 'featured',
    images: [product2],
    review: {
      count: 1,
      stars: 4.5,
    },
  },
  {
    id: '1031',
    name: "Man's training shoes",
    price: 180.0,
    sale: { discount: 20, type: 'percent' },
    images: [product8],
    review: {
      count: 1,
      stars: 4.5,
    },
  },
  {
    id: '1032',
    name: 'Premium stainless steel water bottle',
    price: 40.0,
    images: [product1],
    review: {
      count: 1,
      stars: 4.5,
    },
  },
  {
    id: '1033',
    name: 'High performance headphones with Noise cancellation',
    price: 180.0,
    sale: { discount: 30, type: 'percent' },
    images: [product4],
    review: {
      count: 1,
      stars: 4.5,
    },
  },
  {
    id: '1034',
    name: 'The ultimate smartphone for modern lifestyles',
    price: 215.0,
    images: [product5],
    review: {
      count: 1,
      stars: 4.5,
    },
  },
  {
    id: '1035',
    name: 'Vintage inspired bluetooth radio speaker',
    price: 142.0,
    images: [product6],
    review: {
      count: 1,
      stars: 4.5,
    },
  },
  {
    id: '1036',
    name: "Woman's training shoes",
    price: 215.0,
    images: [product9],
    review: {
      count: 1,
      stars: 4.5,
    },
  },
  {
    id: '1037',
    name: 'Premium cotton baseball cap',
    price: 98.0,
    images: [product3],
    review: {
      count: 1,
      stars: 4.5,
    },
  },
  {
    id: '1038',
    name: 'Air Max Pulse Roam',
    price: 142.0,
    images: [product7],
    review: {
      count: 1,
      stars: 4.5,
    },
  },
]
