import visa from '@/assets/images/elements/visa.svg'
import mastercard from '@/assets/images/elements/mastercard.svg'
import paypal from '@/assets/images/elements/paypal.svg'
import type { IconType } from 'react-icons'
import { BsTruck } from 'react-icons/bs'
import { StaticImageData } from 'next/image'

export type PaymentType = {
  title: string
  subTitle: string
  image?: StaticImageData
  icon?: IconType
}

export const paymentOptions: PaymentType[] = [
  {
    title: 'Visa ending in 1245',
    subTitle: 'Expiry 08/2024',
    image: visa,
  },
  {
    title: 'Mastercard ending in 1245',
    subTitle: 'Expiry 06/2024',
    image: mastercard,
  },
  {
    title: 'Pay using PayPal',
    subTitle: 'Fast, easy and secure',
    image: paypal,
  },
  {
    title: 'Cash on delivery',
    subTitle: 'You have to pay $25 for delivery.',
    icon: BsTruck,
  },
]
