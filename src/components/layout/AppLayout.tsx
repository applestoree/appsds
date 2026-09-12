import type { ReactNode } from 'react'
import { Header } from './Header'
import { BottomNav } from './BottomNav'

export function AppLayout({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex min-h-[100dvh] w-full max-w-[500px] flex-col bg-white shadow-sm"><Header /><main className="min-h-0 flex-1 overflow-y-auto pb-20">{children}</main><BottomNav /></div>
}
