// rc/components/layout/PageLayout.tsx
import type { PropsWithChildren } from "react"

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      {children}
    </main>
  )
}