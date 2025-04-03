import './App.css';
import Profile from './components/Profile';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
  <>
    <ThemeProvider>
      <LanguageProvider>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  </>
  );
}
