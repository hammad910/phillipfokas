import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Aggregate from './components/Aggregate/Aggregate';
import Copilot from './components/Copilot/Copilot';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Integrations from './components/Integrations/Integrations';
import Connect from './components/connect/connect';
import CTA from './components/CTA/CTA';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Success from './components/success/Success';
import Failed from './components/failed/Failed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Failed />} />
        <Route path="/" element={
          <div className="App">
            <Header />
            <Hero />
            <Aggregate />
            <Copilot />
            {/* <Testimonials /> */}
            <Pricing />
            <Integrations />
            <Connect />
            <CTA />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
