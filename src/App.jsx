import About from "./components/About";
import Benefits from "./components/Benefits";
import Headline from "./components/Headline";
import Header from "./components/Header";
import Services from "./components/Services";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import ScrollUpButton from "./components/ScrollUpButton";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-screen font-bodoni text-dark">
      <Header />
      <ScrollUpButton />
      <div className="pt-24">
        <Headline />
        <Benefits />
        <Companies />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
