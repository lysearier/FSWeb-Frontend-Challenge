import './App.css';
import Profile from './components/Profile';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    toast.success("Hoş Geldin!", { position: "top-right", autoClose: 3000 });
  }, []);

  return (
  <>
    <ThemeProvider>
      <LanguageProvider>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
        <ToastContainer />
      </LanguageProvider>
    </ThemeProvider>
  </>
  );
}
