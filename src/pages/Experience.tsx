import { Heading } from '../components/ui/Heading'
import { Text } from '../components/ui/Text'
import PageLayout from "../components/layout/PageLayout"
import { Section } from '../components/ui/Section'
import placeholderImage from '../assets/colours.png'
import { Avatar } from '../components/ui/Avatar'
import Company from '../components/ui/Company'


import CompanyContainer from '../components/ui/CompanyContainer'

export default function Experience() {
  return (
    <PageLayout>
      <Section className ="flex flex-row md:items-center" >
          <div className="space-y-4 md:flex-1">
            <Heading level={1}>Experience</Heading>
            <Text>I worked at CBA doing this</Text>
            <Text>I worked at Datamesh group doing this</Text>
            <Text>I now work at PurchasePlus doing this</Text>
          </div>
          <Avatar src={placeholderImage} alt="Thoughts" size="lg"/>
      </Section>
      <CompanyContainer
        items={[
          { text: 'Company A', img: "src/assets/placeholder.jpg" },
          { text: 'Company B', img: "src/assets/placeholder.jpg" },
          { text: 'Company C' }, // will use default placeholder
        ]}
      />
    </PageLayout>
    
  )
}


