import type { ProductType } from '@/types/shop'

type DiscountType = 'percent' | 'amount'

export const getDiscountedPrice = (originalPrice: number, discount: number, discountType: DiscountType) => {
  if (discountType === 'percent') return originalPrice - (originalPrice * discount) / 100
  else return originalPrice - discount
}

export const calculateDiscount = (p: ProductType): number => {
  return p.sale?.type == 'amount' ? p.sale.discount : p.sale?.type == 'percent' ? (p.price / 100) * p.sale.discount : 0
}
