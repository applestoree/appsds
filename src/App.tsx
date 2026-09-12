import { useEffect, useState } from 'react'
import { AppLayout } from './components/layout/AppLayout'
import { HomePage } from './pages/HomePage'
import { CatalogPage } from './pages/CatalogPage'
import { ProfilePage } from './pages/ProfilePage'
import { ProductStandalone } from './pages/ProductStandalone'
import { CheckoutStandalone } from './pages/CheckoutStandalone'
import { AdminStandalone } from './pages/AdminStandalone'

function usePathname() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  return path
}

export function navigate(path: string) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export default function App() {
  const path = usePathname()
  if (path.startsWith('/product/')) return <ProductStandalone itemGroupId={decodeURIComponent(path.slice('/product/'.length))} />
  if (path === '/checkout') return <CheckoutStandalone />
  if (path === '/admin') return <AdminStandalone />

  const page = path === '/catalog' ? <CatalogPage /> : path === '/profile' ? <ProfilePage /> : <HomePage />
  return <AppLayout>{page}</AppLayout>
}
