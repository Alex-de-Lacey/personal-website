import { cn } from '../../lib/cn'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const base = 'inline-flex items-center rounded-md px-4 py-2 text-sm font-medium'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-white hover:opacity-90'
      : 'border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900'
  return <button className={cn(base, styles, className)} {...props} />
}


