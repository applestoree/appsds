import { useCallback, useEffect, useState } from 'react'
import { getProduct, getProducts } from '../services/appProducts'
import type { Product } from '../types/product'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true); setError('')
    try { setProducts(await getProducts()) } catch (e) { setError(e instanceof Error ? e.message : 'Failed to load products') }
    finally { setLoading(false) }
  }, [])

  useEffect(() => { void load() }, [load])
  return { products, loading, error, reload: load }
}

export function useProduct(itemGroupId: string) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    let active = true
    setLoading(true); setError('')
    getProduct(itemGroupId).then(data => { if (active) setProduct(data) }).catch(e => { if (active) setError(e instanceof Error ? e.message : 'Failed to load product') }).finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [itemGroupId])
  return { product, loading, error }
}
