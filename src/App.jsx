import About from "./components/About";
import Benefits from "./components/Benefits";
import Headline from "./components/Headline";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="max-w-screen font-bodoni text-dark">
      <Sidebar />
      <Headline />
      <Benefits />
      <About />
    </div>
  );
}
