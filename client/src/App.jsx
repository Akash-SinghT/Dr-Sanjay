import "./App.css";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import ContactForm from "./Pages/ContactForm";
import LeadershipAdmin from "./Pages/LeaderShip";
import About from "./Pages/About";
import ResearchPublications from "./Pages/ResearchPublication";
import HonorsAwards from "./Pages/HonorsAndReward";
import AcademicContributions from "./Pages/AcademicContributions";
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
