export const API_BASE_URL = import.meta.env.VITE_APP_PRODUCTS_URL || 'https://jhpbtooefyzdndstlzva.supabase.co/functions/v1/app-products'

export async function apiGet<T>(url: string): Promise<T> {
  const response = await fetch(url)
  let result: { success: boolean; data?: T; error?: string }
  try { result = await response.json() } catch { throw new Error('Invalid API response') }
  if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`)
  if (!result.success || result.data === undefined) throw new Error(result.error || 'Invalid API response')
  return result.data
}
