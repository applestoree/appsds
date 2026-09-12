import { navigate } from '../../App'

export function BottomNav() {
  const path = window.location.pathname
  return <nav className="fixed bottom-0 z-20 flex h-16 w-full max-w-[500px] items-center justify-around border-t border-black/5 bg-white/95 backdrop-blur">
    {[['⌂','Home','/'],['▦','Catalog','/catalog'],['○','Profile','/profile']].map(([icon,label,to]) => <button key={to} onClick={() => navigate(to)} className={`flex flex-col items-center gap-0.5 text-xs ${path === to ? 'font-semibold text-black' : 'text-neutral-500'}`}><span className="text-lg">{icon}</span>{label}</button>)}
  </nav>
}
