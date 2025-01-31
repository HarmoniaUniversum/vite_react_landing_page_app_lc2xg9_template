import '../styles/variables.css'

export default function PricingSection() {
  return (
    &lt;section id="pricing" className="pricing-section section"&gt;
      &lt;div className="container"&gt;
        &lt;h2 className="section-title"&gt;Pricing&lt;/h2&gt;
        &lt;div className="pricing-grid"&gt;
          &lt;div className="pricing-card"&gt;
            &lt;h3&gt;Basic&lt;/h3&gt;
            &lt;p&gt;$99/month&lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="pricing-card"&gt;
            &lt;h3&gt;Pro&lt;/h3&gt;
            &lt;p&gt;$199/month&lt;/p&gt;
          &lt;/div&gt;
          &lt;div className="pricing-card"&gt;
            &lt;h3&gt;Premium&lt;/h3&gt;
            &lt;p&gt;$299/month&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  )
}
