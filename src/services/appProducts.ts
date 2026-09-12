import type { Product } from '../types/product'

const API_URL = import.meta.env.VITE_APP_PRODUCTS_URL || 'https://jhpbtooefyzdndstlzva.supabase.co/functions/v1/app-products'

type ApiResponse<T> = { success: boolean; data?: T; error?: string }

async function request<T>(url: string): Promise<T> {
  const response = await fetch(url)
  let result: ApiResponse<T>
  try { result = await response.json() } catch { throw new Error('Invalid API response') }
  if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`)
  if (!result || result.success !== true || result.data === undefined) throw new Error(result?.error || 'Invalid API response')
  return result.data
}

export async function getProducts(): Promise<Product[]> {
  const data = await request<Product[]>(API_URL)
  if (!Array.isArray(data)) throw new Error('Invalid products response')
  return data
}

export async function getProduct(itemGroupId: string): Promise<Product> {
  return request<Product>(`${API_URL}/${encodeURIComponent(itemGroupId)}`)
}
