import type { PropsWithChildren } from 'react'
import { cn } from '../../lib/cn'

type ContainerProps = PropsWithChildren<{ className?: string }>
type SectionProps = PropsWithChildren<{ id: string; className?: string }>

export function ScrollSnapContainer({ className, children }: ContainerProps) {
  return (
    <div
      data-scroll-root
      className={cn('h-dvh overflow-y-auto md:snap-y md:snap-mandatory', className)}
    >
      {children}
    </div>
  )
}

export function ScrollSnapSection({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'min-h-dvh w-full py-16 flex flex-col justify-center md:py-0 md:snap-start',
        className
      )}
    >
      {children}
    </section>
  )
}


