import thoughtsImage from '../assets/thoughts.png'
import PageLayout from "../components/layout/PageLayout"
import { Section } from '../components/ui/Section'
import { Heading } from '../components/ui/Heading'
import { Text } from '../components/ui/Text'
import { Avatar } from '../components/ui/Avatar'

export default function Thoughts() {
  return (
    <PageLayout>
      <Section className ="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="space-y-4 md:flex-1">
            <Heading level={1}>Thoughts</Heading>
            <Text>My thoughts about these very interesting topics...</Text>
            <Text>Blog post 1</Text>
            <Text>Blog post 2</Text>
          </div>
          <Avatar src={thoughtsImage} alt="Thoughts" size="lg" />
        </div>
      </Section>
    </PageLayout>
  )
}


