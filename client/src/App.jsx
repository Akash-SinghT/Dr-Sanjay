import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ContactForm from "./pages/ContactForm";
import LeadershipAdmin from "./pages/LeaderShip";
import About from "./pages/About";
import ResearchPublications from "./pages/ResearchPublication";
import HonorsAwards from "./pages/HonorsAndReward";
import AcademicContributions from "./pages/AcademicContributions";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <ResearchPublications />
      <AcademicContributions />
      <LeadershipAdmin />
      <HonorsAwards />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
