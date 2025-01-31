import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProgramOverview from './components/ProgramOverview'
import TransformationPhases from './components/TransformationPhases'
import BenefitsSection from './components/BenefitsSection'
import FAQSection from './components/FAQSection'
import PricingSection from './components/PricingSection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    &lt;div className="app"&gt;
      &lt;Header /&gt;
      &lt;main&gt;
        &lt;HeroSection /&gt;
        &lt;ProgramOverview /&gt;
        &lt;TransformationPhases /&gt;
        &lt;BenefitsSection /&gt;
        &lt;FAQSection /&gt;
        &lt;PricingSection /&gt;
        &lt;CallToAction /&gt;
      &lt;/main&gt;
      &lt;Footer /&gt;
    &lt;/div&gt;
  )
}
