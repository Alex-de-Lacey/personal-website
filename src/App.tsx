import './App.css'
import Overview from './pages/Overview'
import About from './pages/About'
import Experience from './pages/Experience'
import Thoughts from './pages/Thoughts'
import Contact from './pages/Contact'
import Navbar from './components/ui/Navbar'
import PageIndicator from './components/ui/PageIndicator'
import { ScrollSnapContainer, ScrollSnapSection } from './components/layout/ScrollSnap'

function App() {

  return (
    <>
      <Navbar />
      <PageIndicator />
      <ScrollSnapContainer>
        <ScrollSnapSection id="overview">
          <Overview />
        </ScrollSnapSection>
        <ScrollSnapSection id="about">
          <About />
        </ScrollSnapSection>
        <ScrollSnapSection id="experience">
          <Experience />
        </ScrollSnapSection>
        <ScrollSnapSection id="thoughts">
          <Thoughts />
        </ScrollSnapSection>
        <ScrollSnapSection id="contact">
          <Contact />
        </ScrollSnapSection>
      </ScrollSnapContainer>
    </>
  )
}

export default App
