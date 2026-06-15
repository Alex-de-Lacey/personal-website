// rc/components/layout/PageLayout.tsx
import type { PropsWithChildren } from "react"
import { Section } from "../ui/Section"
import { Container } from "../ui/Container"

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <main className="w-full">
      <Container>
        <Section className ="flex flex-col">
          {children}
        </Section>
      </Container>
    </main>
  )
}