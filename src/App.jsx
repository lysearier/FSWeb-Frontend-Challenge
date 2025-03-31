import './App.css';
import Profile from './components/Profile';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';


export default function App() {
  return (
    <>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
    </>
  );
}
