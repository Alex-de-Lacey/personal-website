import contactImage from '../assets/contact.png'
import { Section } from '../components/ui/Section'
import { Heading } from '../components/ui/Heading'
import { Text } from '../components/ui/Text'
import { Avatar } from '../components/ui/Avatar'
import PageLayout from "../components/layout/PageLayout"

export default function Contact() {
  return (
    <PageLayout>
      <Section className ="flex flex-col md:flex-row items-start md:items-center text-left gap-6">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
          <div className="space-y-4 md:flex-1 text-left">
            <Heading level={1}>Contact</Heading>
            <Text>Get in touch with me!</Text>
          </div>
          <Avatar src={contactImage} alt="Contact" size="lg" />
        </div>
      </Section>
    </PageLayout>
  )
}


