import thoughtsImage from '../assets/thoughts.png'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Heading } from '../components/ui/Heading'
import { Text } from '../components/ui/Text'
import { Avatar } from '../components/ui/Avatar'

export default function Thoughts() {
  return (
    <Container>
      <Section className ="flex flex-col md:flex-row items-start md:items-center text-left gap-6">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
          <div className="space-y-4 md:flex-1 text-left">
            <Heading level={1}>Thoughts</Heading>
            <Text>My thoughts about these very interesting topics...</Text>
            <Text>Blog post 1</Text>
            <Text>Blog post 2</Text>
          </div>
          <Avatar src={thoughtsImage} alt="Thoughts" size="lg" />
        </div>
      </Section>
    </Container>
  )
}


