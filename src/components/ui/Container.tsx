import { cn } from '../../lib/cn'
import type { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren<{
  className?: string
}>

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn('max-w-5xl mx-auto px-6 sm:px-8', className)}>{children}</div>
  )
}


