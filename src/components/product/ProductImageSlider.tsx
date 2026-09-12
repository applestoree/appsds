import type { Product } from '../../types/product'
export function ProductImageSlider({ product }: { product: Product }) { return <div className="aspect-square bg-neutral-50"><img src={product.link} alt={product.title} className="h-full w-full object-contain" /></div> }
