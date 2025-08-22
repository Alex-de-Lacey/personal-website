import { cn } from '../../lib/cn'

type AvatarProps = {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'w-10 h-10',
  md: 'w-24 h-24',
  lg: 'w-64 h-64',
}

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'rounded-full object-cover border border-zinc-700/50 shrink-0',
        sizeMap[size],
        className,
      )}
    />
  )
}


