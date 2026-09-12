import { useSyncExternalStore } from 'react'
import { cartStore } from '../store/cartStore'

export function useCart() {
  const state = useSyncExternalStore(cartStore.subscribe, cartStore.getState, cartStore.getState)
  return { ...state, addToCart: cartStore.add, removeFromCart: cartStore.remove, updateQuantity: cartStore.update, clearCart: cartStore.clear }
}
