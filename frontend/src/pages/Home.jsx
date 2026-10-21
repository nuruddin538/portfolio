import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
