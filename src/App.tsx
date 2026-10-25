import Hero from './components/Hero';
import EarningsCalculator from './components/EarningsCalculator';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section4 from './components/Section4';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import ApplicationForm from './components/ApplicationForm';
import ReferModel from './components/ReferModel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Hero />
      <EarningsCalculator />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <ApplicationForm />
      <ReferModel />
      <Footer />
    </div>
  );
}

export default App;
