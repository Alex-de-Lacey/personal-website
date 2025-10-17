import { Heading } from '../components/ui/Heading'
import PageLayout from "../components/layout/PageLayout"
import { Section } from '../components/ui/Section'
import CompanyContainer from '../components/ui/CompanyContainer'

// Import company logos
import cbaLogo from '../assets/cba.png'
import dmgLogo from '../assets/dmg.jpg'
import pplusLogo from '../assets/pplus.jpg'

const commonwealthBank = {
  companyName: 'Commonwealth Bank',
  roleDescription: 'I worked on the Digital Payments Team building and improving Australia\'s largest Eftpos terminal network, along with the supporting systems and infrastructure behind it.',
  img: cbaLogo,
  whiteBackground: true,
}

const datameshGroup = {
  companyName: 'Datamesh Group',
  roleDescription: 'I worked on the Ecommerce team at DataMesh, shaping the roadmap and building the payment gateway, settlement engine, and merchant tools powering digital payments across APAC.',
  img: dmgLogo,
  whiteBackground: false,
}

const purchasePlus = {
  companyName: 'PurchasePlus',
  roleDescription: 'At PurchasePlus, I focus on making our platform streamlined and scalable through software integrations and product improvements.',
  img: pplusLogo,
  whiteBackground: false,
}

export default function Experience() {
  return (
    <PageLayout>
      <Section className ="flex flex-row md:items-center" >
          <div className="space-y-4 md:flex-1">
            <Heading level={1}>Experience</Heading>
          </div>
      </Section>
      <CompanyContainer
        items={[
          { companyName: commonwealthBank.companyName, roleDescription: commonwealthBank.roleDescription, img: commonwealthBank.img, whiteBackground: commonwealthBank.whiteBackground },
          { companyName: datameshGroup.companyName, roleDescription: datameshGroup.roleDescription, img: datameshGroup.img, whiteBackground: datameshGroup.whiteBackground },
          { companyName: purchasePlus.companyName, roleDescription: purchasePlus.roleDescription, img: purchasePlus.img, whiteBackground: purchasePlus.whiteBackground },
        ]}
      />
      <a className = "text-right text-secondary opacity-0" href="test.io" >Resume.pdf</a>
    </PageLayout>
    
  )
}
