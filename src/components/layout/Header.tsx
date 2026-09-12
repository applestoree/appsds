import { navigate } from '../../App'
import { useCart } from '../../hooks/useCart'

export function Header({ standalone = false }: { standalone?: boolean }) {
  const { items } = useCart()
  const count = items.reduce((s, i) => s + i.quantity, 0)
  return <header className="flex h-14 shrink-0 items-center gap-3 border-b border-black/5 bg-white px-4">
    {standalone ? <button onClick={() => navigate('/')} aria-label="Back" className="text-xl">‹</button> : <button onClick={() => navigate('/')} className="font-semibold tracking-tight">Apple Store Malaysia</button>}
    <div className="ml-auto flex items-center gap-2">
      {!standalone && <button onClick={() => navigate('/catalog')} aria-label="Search" className="rounded-full px-2 py-1 text-lg">⌕</button>}
      <button aria-label="Notifications" className="rounded-full px-2 py-1 text-lg">♢</button>
      <button onClick={() => navigate('/checkout')} aria-label="Cart" className="relative rounded-full px-2 py-1 text-lg">□{count > 0 && <span className="absolute -right-0.5 -top-0.5 min-w-4 rounded-full bg-black px-1 text-center text-[10px] text-white">{count}</span>}</button>
    </div>
  </header>
}
