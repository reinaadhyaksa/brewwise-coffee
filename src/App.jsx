import { useState } from 'react'
import { Navbar, NavbarMobile } from './components/Navbar'
import { HeroSection } from './components/Hero'
import { MenuSection } from './components/Menu'
import { AboutSection } from './components/About'
import { TestimonialsSection } from './components/Testimonials'
import { ContactSection } from './components/Contact'
import { NewsletterSection } from './components/NewsLetter'
import { FooterSection } from './components/Footer'

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleOrder = (productType = '') => {
    let message = "I'd like to place an order";
    if (productType) {
      message = `I'd like to order ${productType}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(`https://wa.me/6282313931717?text=${encodedMessage}`, '_blank');
    } else {
      window.open(`https://web.whatsapp.com/send?phone=6282313931717&text=${encodedMessage}`, '_blank');

      setTimeout(() => {
        window.open(`https://wa.me/6282313931717?text=${encodedMessage}`, '_blank');
      }, 1000);
    }
  }

  return (
    <div className="font-poppins bg-coffee-cream text-coffee overflow-x-hidden">
      <Navbar setMobileMenuOpen={setMobileMenuOpen} handleOrder={handleOrder} />

      {mobileMenuOpen && (
        <NavbarMobile 
          setMobileMenuOpen={setMobileMenuOpen} 
          handleOrder={handleOrder} 
          mobileMenuOpen={mobileMenuOpen} 
        />
      )}

      <HeroSection handleOrder={handleOrder} />
      <MenuSection handleOrder={handleOrder} />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSection />
      <FooterSection handleOrder={handleOrder} />
    </div>
  )
}

export default App