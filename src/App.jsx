import About from "./components/About";
import Benefits from "./components/Benefits";
import Headline from "./components/Headline";
import Header from "./components/Header";
import Services from "./components/Services";
import Companies from "./components/Companies";

export default function App() {
  return (
    <div className="max-w-screen font-bodoni text-dark">
      <Header />
      <div className="pt-40">
        <Headline />
        <Benefits />
        <Companies />
        <Services />
        <About />
      </div>
    </div>
  );
}
