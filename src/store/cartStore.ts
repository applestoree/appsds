import type { CartItem, CartState } from '../types/cart'
import type { Product } from '../types/product'

let state: CartState = { items: [] }
const listeners = new Set<() => void>()
const emit = () => listeners.forEach(listener => listener())

export const cartStore = {
  getState: () => state,
  subscribe: (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener) },
  add(product: Product) { const found = state.items.find(i => i.product.item_group_id === product.item_group_id); state = { items: found ? state.items.map(i => i.product.item_group_id === product.item_group_id ? { ...i, quantity: i.quantity + 1 } : i) : [...state.items, { product, quantity: 1 }] }; emit() },
  remove(id: string) { state = { items: state.items.filter(i => i.product.item_group_id !== id) }; emit() },
  update(id: string, quantity: number) { state = { items: quantity <= 0 ? state.items.filter(i => i.product.item_group_id !== id) : state.items.map(i => i.product.item_group_id === id ? { ...i, quantity } : i) }; emit() },
  clear() { state = { items: [] }; emit() },
}

export function getCartCount(items: CartItem[]) { return items.reduce((sum, item) => sum + item.quantity, 0) }
