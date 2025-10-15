// rc/components/layout/PageLayout.tsx
import type { PropsWithChildren } from "react"
import { Section } from "../ui/Section"

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <main className="max-w-5xl w-full mx-auto">
      <Section className ="flex flex-col">
        {children}
      </Section>
    </main>
  )
}