import { cn } from '../../lib/cn'
import { PropsWithChildren } from 'react'

type TextProps = PropsWithChildren<{
  className?: string
}>

export function Text({ className, children }: TextProps) {
  return (
    <p className={cn('text-lg text-zinc-500 dark:text-zinc-400', className)}>
      {children}
    </p>
  )
}


