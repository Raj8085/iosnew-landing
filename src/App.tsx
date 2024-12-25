import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import {  HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
// import { ScrollToTop } from "./components/ScrollToTop";
// import Features, { Services } from "./components/Services";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      
    {/* <Features/> */}
    {/* <Footer />  */}

      {/* <Services /> */}
      <Cta />
      {/* <EntertaimentImage/> */}
 
      <FAQ />
      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
}

export default App;
