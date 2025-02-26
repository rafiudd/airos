import shop1Img from '@/assets/images/shop/01.png'
import shop2Img from '@/assets/images/shop/02.png'
import shop3Img from '@/assets/images/shop/03.png'
import { StaticImageData } from 'next/image'

export type OrderType = {
  image: StaticImageData
  orderNo: string
  name: string
  size?: string
  deliveryDate: string
  status: 'delivered' | 'processing' | 'cancelled'
  amount: number
}

export const ordersData: OrderType[] = [
  {
    image: shop2Img,
    orderNo: "#458795",
    name: "Round neck cotton t-shirt",
    size: "L",
    deliveryDate: "10 Nov, 2023",
    status: "delivered",
    amount: 103,
  },
  {
    image: shop3Img,
    orderNo: "#548762",
    name: "Men baseball cap",
    size: "S",
    deliveryDate: "05 Nov, 2023",
    status: "cancelled",
    amount: 115,
  },
  {
    image: shop1Img,
    orderNo: "#248795",
    name: "Woman skincare drops",
    deliveryDate: "05 Nov, 2023",
    status: 'processing',
    amount: 98,
  }
]
