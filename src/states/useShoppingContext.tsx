'use client'
import { ProductType, ShoppingState, type CartType, type WishlistType } from '@/types/shop'
import { createContext, ReactNode, useCallback, useContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { calculateDiscount } from '@/helpers/products'
import { cartItems } from '@/assets/data/cart-items'
import { toast } from 'react-toastify'

const INIT_STATE: ShoppingState = {
  cartItems: cartItems,
  wishlists: [],
  addToCart: () => {},
  toggleToWishlist: () => {},
  isInWishlist: () => false,
  isInCart: () => false,
  updateQuantityForProduct: () => {},
  getCalculatedOrder: () => {
    return {
      orderTotal: 0,
      tax: 0,
      total: 0,
      totalDiscount: 0,
    }
  },
}

const ShopContext = createContext<ShoppingState | null>(null)

export const useShoppingContext = (): ShoppingState => {
  const context = useContext(ShopContext)
  if (context === undefined) {
    throw new Error('useShopContext must be used within an ShopProvider')
  }
  return context!
}

export const ShopProvider = ({ children }: { children: ReactNode }) => {

  const [state, setState] = useLocalStorage<ShoppingState>('__Mizzle_React_', INIT_STATE)


  const getCalculatedOrder = useCallback(() => {
    let cartTotal = 0,
      cartDiscount = 0

    state.cartItems.forEach((cart) => {
      cartDiscount += calculateDiscount(cart.product!) * cart.quantity
      cartTotal += cart.product!.price * cart.quantity
    })

    const cartAmount = cartTotal - cartDiscount
    const tax = cartAmount * 0.18

    return {
      total: cartTotal,
      totalDiscount: cartDiscount,
      tax: tax,
      orderTotal: cartAmount + tax,
    }
  }, [state.cartItems])

  const isInCart = (product: ProductType): boolean => {
    return state.cartItems.find((cartItem: CartType) => cartItem?.productId == product?.id) != null
  }

  const updateQuantityForProduct = (product: ProductType, quantity: number): void => {
    let cartItems = []
    if (quantity < 0) return
    if (quantity == 0) {
      cartItems = state.cartItems.filter((cart: CartType) => cart.productId != product.id)
      toast(`${product.name} removed to your cart`, { type: 'error', autoClose: 1000 })
    } else {
      if (isInCart(product)) {
        cartItems = state.cartItems.map((cart: CartType) => {
          if (cart.productId == product.id) {
            return {
              ...cart,
              quantity: quantity,
            }
          }
          return cart
        })
      } else {
        cartItems = state.cartItems
        cartItems.push({
          id: (state.cartItems.length + 1).toString(),
          product: product,
          quantity: quantity,
          productId: product.id,
        })

        toast(`${product.name} added to your cart`, { type: 'success', autoClose: 1000 })
      }
    }
    updateState({ cartItems })
  }

  const isInWishlist = (product: ProductType): boolean => {
    return state.wishlists.find((wishlistDish: WishlistType) => wishlistDish?.id == product?.id) != null
  }

  const toggleToWishlist = (product: ProductType): void => {
    let wishlists = state.wishlists
    if (isInWishlist(product)) {
      wishlists = wishlists.filter((p: WishlistType) => p.id != product.id)
    } else {
      wishlists.push(product)
    }
    updateState({ wishlists })
  }

  const updateState = (changes: Partial<ShoppingState>) => setState({ ...state, ...changes })

  return (
    <ShopContext.Provider
      value={{
        ...state,
        toggleToWishlist,
        isInWishlist,
        isInCart,
        updateQuantityForProduct,
        getCalculatedOrder,
      }}>
      {children}
    </ShopContext.Provider>
  )
}
