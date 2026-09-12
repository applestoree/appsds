import { navigate } from '../../App'
import type { Product } from '../../types/product'

export function ProductCard({ product }: { product: Product }) {
  return <button onClick={() => navigate(`/product/${encodeURIComponent(product.item_group_id)}`)} className="overflow-hidden rounded-2xl border border-black/5 bg-white text-left shadow-sm">
    <div className="aspect-square bg-neutral-50"><img src={product.link} alt={product.title} className="h-full w-full object-contain" loading="lazy" /></div>
    <div className="p-3"><div className="line-clamp-2 font-medium">{product.title}</div><div className="mt-1 text-xs text-neutral-500">{product.product_type} · {product.availability}</div></div>
  </button>
}
