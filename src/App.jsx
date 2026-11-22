import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import TracksSection from './components/TracksSection'
import BenefitsSection from './components/BenefitsSection'
import CurriculumSection from './components/CurriculumSection'
import MethodSection from './components/MethodSection'
import ForWhoSection from './components/ForWhoSection'
import FacilitiesSection from './components/FacilitiesSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import UrgencySection from './components/UrgencySection'
import HowToRegisterSection from './components/HowToRegisterSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <SolutionSection />
        <TracksSection />
        <BenefitsSection />
        <CurriculumSection />
        <MethodSection />
        <ForWhoSection />
        <FacilitiesSection />
        <TestimonialsSection />
        <PricingSection />
        <UrgencySection />
        <HowToRegisterSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
