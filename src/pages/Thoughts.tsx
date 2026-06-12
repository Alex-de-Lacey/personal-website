import PageLayout from "../components/layout/PageLayout"
import { Section } from '../components/ui/Section'
import { Heading } from '../components/ui/Heading'
import { Text } from '../components/ui/Text'
import Thought from '../components/ui/Thought'

// Newest first.
const thoughts = [
  { title: "How to Create or Improve a Digital Interface for Those That Don’t Know Much About UX/UI",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*8bYxjrWq64nu_Nmq8G4pKA.jpeg",
    date: "2023-06-05",
    link: "https://alexdelacey-13446.medium.com/how-to-create-or-improve-a-digital-interface-for-those-that-dont-know-much-about-ux-ui-254b0b7cd934"
  },
  { title: "The Best Suburb in Sydney",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnDdugV_ow-55Pt9l3M4AA.jpeg",
    date: "2021-03-10",
    link: "https://medium.com/nerd-for-tech/the-best-suburb-in-sydney-967f8c46fa30"
  },
]

export default function Thoughts() {
  return (
    <PageLayout>
      <Section className ="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="space-y-4">
            <Heading level={1}>Thoughts</Heading>
            <Text>Occasional writing on product, design, and software development.</Text>
          </div>
        </div>
      </Section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center md:justify-items-stretch">
        {thoughts.map((thought) => (
          <Thought key={thought.link} title={thought.title} image={thought.image} date={thought.date} link={thought.link} />
        ))}
      </div>
    </PageLayout>
  )
}


