import './App.css';
import Navbar from './pages/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Projects from './pages/Projects/Project';
import Contact from './pages/Contact/Contact';
import About from './pages/About me/About';
import Experience from './pages/Experience & Skills/Experience';
import StartProject from './pages/Startproject/startProject';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <StartProject />
    </div>
  );
}

export default App;