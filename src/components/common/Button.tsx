import type { ReactNode } from 'react'
export function Button({ children, onClick, disabled = false, className = '' }: { children: ReactNode; onClick?: () => void; disabled?: boolean; className?: string }) { return <button disabled={disabled} onClick={onClick} className={`rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white disabled:opacity-40 ${className}`}>{children}</button> }
