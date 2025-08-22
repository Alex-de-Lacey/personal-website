import { cn } from '../../lib/cn'
import { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren<{
  className?: string
}>

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn('max-w-5xl mx-auto px-4', className)}>{children}</div>
  )
}


