import type { CartType } from '@/types/shop'
import { products } from '@/assets/data/products'

export const cartItems: CartType[] = [
  {
    id: '1',
    product: products[0],
    productId: products[0].id,
    quantity: 1,
  },
  {
    id: '2',
    product: products[1],
    productId: products[1].id,
    quantity: 1,
  },
  {
    id: '3',
    product: products[2],
    productId: products[2].id,
    quantity: 1,
  },
]
