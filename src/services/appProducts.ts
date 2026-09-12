import type { Product } from '../types/product'
import { API_BASE_URL, apiGet } from './api'

export async function getProducts(): Promise<Product[]> {
  const data = await apiGet<Product[]>(API_BASE_URL)
  if (!Array.isArray(data)) throw new Error('Invalid products response')
  return data
}

export async function getProduct(itemGroupId: string): Promise<Product> {
  return apiGet<Product>(`${API_BASE_URL}/${encodeURIComponent(itemGroupId)}`)
}
