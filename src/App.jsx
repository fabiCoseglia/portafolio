import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/Skills';
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { WaveSeparate } from './components/WaveSeparate';
import { WaveBot } from './components/WaveBot';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';
import { Footer } from './components/Footer';







function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <WaveSeparate />
      <Skills />
      <WaveBot />
      <AboutMe/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default App
