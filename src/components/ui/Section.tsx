import { cn } from '../../lib/cn'
import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  className?: string
}>

export function Section({ className, children }: SectionProps) {
  return <section className={cn('py-12', className)}>{children}</section>
}


