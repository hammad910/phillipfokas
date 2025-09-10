import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Aggregate from './components/Aggregate/Aggregate';
import Copilot from './components/Copilot/Copilot';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Integrations from './components/Integrations/Integrations';
import CTA from './components/CTA/CTA';
import Connect from './components/connect/connect';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Aggregate />
      <Copilot />
      <Testimonials />
      <Pricing />
      <Integrations />
      <Connect />
      <CTA />
    </div>
  );
}

export default App;
