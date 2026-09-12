import { useProducts } from '../hooks/useProducts'
import { ProductGrid } from '../components/product/ProductGrid'
import { Loading } from '../components/common/Loading'
import { EmptyState } from '../components/common/EmptyState'

export function HomePage() { const { products, loading, error } = useProducts(); return <div className="p-4"><div className="mb-6 rounded-3xl bg-black p-5 text-white"><div className="text-xs uppercase tracking-[.2em] text-white/60">Apple Store Malaysia</div><h1 className="mt-2 text-3xl font-semibold">Shop Apple products.</h1></div>{loading ? <Loading /> : error ? <EmptyState message={error} /> : products.length === 0 ? <EmptyState /> : <ProductGrid products={products} />}</div> }
