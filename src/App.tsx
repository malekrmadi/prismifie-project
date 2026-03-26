import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { EventPage } from "./pages/EventPage";
import { ConseilPage } from "./pages/ConseilPage";
import { MarketingPage } from "./pages/MarketingPage";
import { ExpertisesPage } from "./pages/ExpertisesPage";
import { OffresPage } from "./pages/OffresPage";
import { RealisationsPage } from "./pages/RealisationsPage";
import { AProposPage } from "./pages/AProposPage";
import { ContactPage } from "./pages/ContactPage";
import { ScrollToTop } from "./components/layout/ScrollToTop";

function App() {
  return (
    <div className="main-layout">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expertises" element={<ExpertisesPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/conseil" element={<ConseilPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/offres" element={<OffresPage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
