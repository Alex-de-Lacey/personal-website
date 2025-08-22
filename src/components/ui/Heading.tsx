import { cn } from '../../lib/cn'
import { PropsWithChildren } from 'react'

type HeadingProps = PropsWithChildren<{
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}>

export function Heading({ className, children, level = 1 }: HeadingProps) {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements
  const base =
    level === 1
      ? 'text-4xl sm:text-5xl font-extrabold tracking-tight'
      : level === 2
      ? 'text-xl font-semibold'
      : 'text-lg font-semibold'
  return <Tag className={cn(base, className)}>{children}</Tag>
}


