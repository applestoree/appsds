import { navigate } from '../App'
import { Header } from '../components/layout/Header'
import { BottomActionBar } from '../components/layout/BottomActionBar'
import { ProductImageSlider } from '../components/product/ProductImageSlider'
import { ProductInfo } from '../components/product/ProductInfo'
import { ProductVariant } from '../components/product/ProductVariant'
import { ProductDescription } from '../components/product/ProductDescription'
import { Loading } from '../components/common/Loading'
import { EmptyState } from '../components/common/EmptyState'
import { Button } from '../components/common/Button'
import { useProduct } from '../hooks/useProducts'
import { useCart } from '../hooks/useCart'

export function ProductStandalone({ itemGroupId }: { itemGroupId: string }) { const { product, loading, error } = useProduct(itemGroupId); const { addToCart } = useCart(); return <div className="mx-auto flex min-h-[100dvh] w-full max-w-[500px] flex-col bg-white"><Header standalone /><main className="min-h-0 flex-1 overflow-y-auto pb-20">{loading ? <Loading /> : error || !product ? <EmptyState message={error || 'Product not found'} /> : <><ProductImageSlider product={product} /><ProductInfo product={product} /><ProductVariant product={product} /><ProductDescription product={product} /></>}</main>{product && <BottomActionBar><div className="flex gap-2"><Button className="flex-1 bg-white !text-black ring-1 ring-black" onClick={() => { addToCart(product); navigate('/checkout') }}>Buy Now</Button><Button className="flex-1" onClick={() => addToCart(product)}>Add to Cart</Button></div></BottomActionBar>}</div> }
