import type { Product } from '../../types/product'
import { ProductCard } from './ProductCard'
export function ProductGrid({ products }: { products: Product[] }) { return <div className="grid grid-cols-2 gap-3">{products.map(p => <ProductCard key={p.item_group_id} product={p} />)}</div> }
