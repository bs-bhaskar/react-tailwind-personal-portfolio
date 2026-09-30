import { Routes, Route } from "react-router-dom";

import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";

import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";
import { CareerHub } from "./sections/CareerHub";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-hub" element={<CareerHub />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;