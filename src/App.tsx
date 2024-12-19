import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      {/* <About /> */}
      <HowItWorks />
      {/* <Features /> */}
      <Services />
      <Cta />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
