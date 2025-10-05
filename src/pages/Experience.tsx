import { Heading } from '../components/ui/Heading'
import PageLayout from "../components/layout/PageLayout"
import { Section } from '../components/ui/Section'


const commonwealthBank = {
  companyName: 'Commonwealth Bank',
  roleDescription: 'I worked on the Digital Payments Team building and improving Australia’s largest Eftpos terminal network, along with the supporting systems and infrastructure behind it.',
  img: "src/assets/cba.png",
  whiteBackground: true,
}

const datameshGroup = {
  companyName: 'Datamesh Group',
  roleDescription: 'I worked on the Ecommerce team at DataMesh, shaping the roadmap and building the payment gateway, settlement engine, and merchant tools powering digital payments across APAC.',
  img: "src/assets/dmg.jpg",
  whiteBackground: false,
}

const purchasePlus = {
  companyName: 'PurchasePlus',
  roleDescription: 'At PurchasePlus, I focus on making our platform more streamlined and scalable through software integrations and product improvements.',
  img: "src/assets/pplus.jpg",
  whiteBackground: false,
}

import CompanyContainer from '../components/ui/CompanyContainer'

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
      <a>My Resume</a>
    </PageLayout>
    
  )
}