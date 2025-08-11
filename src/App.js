import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css'; // Global styles
import ServicesSection from './components/ServicesSection';
import CardGridSection from './components/CardGridSections';
import WhyUsSection from './components/WhyUsSection';
import IndustrySection from './components/IndustrySection';
import HowWeDoSection from './components/HowWeDoSection';
import LetsTalkSection from './components/LetsTalkSection';
// import PricingSection from './components/PricingSection';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Section 1: Hero */}
      <section id="section-1" className="page-section">
        <Hero />
      </section>

      {/* Section 2 */}
      <section id="section-2" className="page-section">
        <ServicesSection/>
        {/* Next-Gen Al Services section content goes here */}
      </section>

      {/* Section 3 */}
      {/* <section id="section-3" className="page-section">
       <CardGridSection />
      </section> */}

      {/* Section 4 */}
      <section id="section-4" className="page-section">
        <WhyUsSection />
      </section>

      {/* Section 5 */}
      <section id="section-5" className="page-section">
        <IndustrySection />
      </section>

      {/* Section 6 */}
      <section id="section-6" className="page-section">
        <HowWeDoSection/>
      </section>

      {/* Section 7 */}
      {/* <section id="section-7" className="page-section">
        <PricingSection/>
      </section> */}
      {/* Section 8 */}
      <section id="section-8" className="page-section">
        <LetsTalkSection />
      </section>

      {/* Section 9: Footer */}
      <Footer/>
    </div>
  );
}

export default App;
