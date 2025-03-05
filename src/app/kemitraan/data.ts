import type { pricingPlanType, StepType, TestimonialType } from './types'

import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'

export const steps: StepType[] = [
  {
    stepNumber: '01',
    title: 'Ajukan Kemitraan',
    description: 'Hubungi tim kami dan ajukan permohonan sebagai distributor resmi.',
  },
  {
    stepNumber: '02',
    title: 'Verifikasi & Persetujuan',
    description: `Kami akan meninjau pengajuan dan memastikan kecocokan dalam ekosistem AIROS.`,
  },
  {
    stepNumber: '03',
    title: 'Pesan & Mulai Distribusi',
    description: `Setelah disetujui, Anda dapat memesan stok dan mulai mendistribusikan AIROS.`,
  },
  {
    stepNumber: '04',
    title: 'Dukungan & Pertumbuhan Bisnis',
    description: `Dapatkan materi pemasaran, strategi penjualan, dan branding eksklusif untuk mempercepat pertumbuhan Anda.`,
  },
]

export const pricingData: pricingPlanType[] = [
  {
    duration: 'month',
    price: 199,
    features: [
      'Unlimited monthly visitors',
      'Dedicated SEO strategists',
      'Google Docs style editors',
      'Basic chat and email support',
      'AI powered product recommendation engine',
    ],
  },
  {
    duration: 'annual',
    price: 159,
    features: [
      'Unlimited monthly visitors',
      'Dedicated SEO strategists',
      'Google Docs style editors',
      'Basic chat and email support',
      'AI powered product recommendation engine',
    ],
  },
]

export const testimonials: TestimonialType[] = [
  {
    user: {
      avatar: avatar11,
      firstName: 'Emma',
      lastName: 'Watson',
    },
    comment:
      'I highly recommend Mizzle to anyone looking for a high-quality Bootstrap template. Valley by oh twenty direct me so. Resolving breakfast am or perfectly.',
    rating: 4.5,
  },
  {
    user: {
      avatar: avatar8,
      firstName: 'Louis',
      lastName: 'Ferguson',
    },
    comment: 'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.',
    rating: 4.5,
  },
  {
    user: {
      avatar: avatar5,
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
    comment:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    rating: 4.5,
  },
]
