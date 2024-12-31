import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Story from "./components/Story";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Story />
      <Contact />
      <Footer />
    </main>
  ); 
}
