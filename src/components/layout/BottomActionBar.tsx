import type { ReactNode } from 'react'
export function BottomActionBar({ children }: { children: ReactNode }) { return <div className="sticky bottom-0 z-10 border-t border-black/5 bg-white p-3">{children}</div> }
