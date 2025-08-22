import type { PropsWithChildren } from 'react'
import { cn } from '../../lib/cn'

type ContainerProps = PropsWithChildren<{ className?: string }>
type SectionProps = PropsWithChildren<{ id: string; className?: string }>

export function ScrollSnapContainer({ className, children }: ContainerProps) {
  return (
    <div className={cn('h-dvh overflow-y-auto snap-y snap-proximity', className)}>
      {children}
    </div>
  )
}

export function ScrollSnapSection({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('min-h-dvh w-full snap-start flex items-center', className)}>
      {children}
    </section>
  )
}


