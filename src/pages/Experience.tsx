import experienceImage from '../assets/experience.png'
import { Heading } from '../components/ui/Heading'
import { Text } from '../components/ui/Text'
import { Avatar } from '../components/ui/Avatar'
import PageLayout from "../components/layout/PageLayout"
import { Section } from '../components/ui/Section'

export default function Experience() {
  return (
    <PageLayout>
      <Section className ="flex flex-col md:flex-row items-start md:items-center text-left gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center text-left gap-6">
          <div className="space-y-4 md:flex-1 text-left">
            <Heading level={1}>Experience</Heading>
            <Text>I worked at CBA doing this</Text>
            <Text>I worked at Datamesh group doing this</Text>
            <Text>I now work at PurchasePlus doing this</Text>
          </div>
          <Avatar src={experienceImage} alt="Experience" size="lg" />
        </div>
      </Section>
    </PageLayout>
    
  )
}


