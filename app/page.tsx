import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Skills/>
      <Contact/>
    </main>
  );
}