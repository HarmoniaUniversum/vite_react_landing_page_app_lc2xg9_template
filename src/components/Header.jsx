import { useEffect, useState } from 'react'
import '../styles/variables.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() =&gt; {
    const handleScroll = () =&gt; {
      if (window.scrollY &gt; 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () =&gt; window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    &lt;header className={`header ${isScrolled ? 'scrolled' : ''}`}&gt;
      &lt;div className="container"&gt;
        &lt;nav&gt;
          &lt;ul className="nav-list"&gt;
            &lt;li&gt;&lt;a href="#hero"&gt;Home&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#program"&gt;Program&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#benefits"&gt;Benefits&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#pricing"&gt;Pricing&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/nav&gt;
      &lt;/div&gt;
    &lt;/header&gt;
  )
}
