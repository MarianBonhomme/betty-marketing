import About from "./components/About";
import Benefits from "./components/Benefits";
import Headline from "./components/Headline";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="max-w-screen font-bodoni text-dark">
      <Header />
      <Headline />
      <Benefits />
      <About />
    </div>
  );
}
