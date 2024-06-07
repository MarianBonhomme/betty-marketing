import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Headline from "./sections/Headline";
import Header from "./sections/Header";
import Services from "./sections/Services";
import Companies from "./sections/Companies";
import Contact from "./sections/Contact";
import ScrollUpButton from "./components/ScrollUpButton";
import Footer from "./sections/Footer";
import MenuMobile from "./components/MenuMobile";

export default function App() {
  return (
    <div className="max-w-screen font-bodoni text-dark overflow-x-hidden">
      <MenuMobile />
      <Header />
      <ScrollUpButton />
      <div className="pt-24 mx-auto">
        <Headline />
        <Benefits />
        <Companies />
        <Services />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
