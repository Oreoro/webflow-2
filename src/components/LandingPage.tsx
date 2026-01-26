import Hero from './Hero';
import ValueProposition from './ValueProposition';
import HowItWorks from './HowItWorks';
import SocialProof from './SocialProof';
import Pricing from './Pricing';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import LiveChat from './LiveChat';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <LiveChat />
    </div>
  );
}
