import { cn } from '../../lib/cn'
import type { PropsWithChildren } from 'react'

type TextProps = PropsWithChildren<{
  className?: string
}>

export function Text({ className, children }: TextProps) {
  return (
    <p className={cn(className)}>
      {children}
    </p>
  )
}


