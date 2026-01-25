import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { PrismLight } from "./sections/PrismLight";
import { About } from "./sections/About";
import { Commitments } from "./sections/Commitments";
import { Prestations } from "./sections/Services";
//import { Expertise } from "./sections/Expertise";
import { Collaborations } from "./sections/Collaborations";
import { FAQ } from "./sections/FAQ";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="main-layout">
      <Header />
      <main>
        <Hero />
        <PrismLight />
        <About />
        <Commitments />
        <Prestations />
        <Collaborations />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
