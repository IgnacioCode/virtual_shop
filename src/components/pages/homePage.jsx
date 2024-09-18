import React from 'react';
import Header from '../header.jsx'
import HeroSection from '../ui_sections/heroSection.jsx';
import ProductsSection from '../ui_sections/ProductSection.jsx';
import ContactSection from '../ui_sections/ContactSection.jsx';

function HomePage() {
      return (
        <div className="flex flex-col min-h-screen">
          <HeroSection></HeroSection>
          <ProductsSection></ProductsSection>
          <ContactSection></ContactSection>
        </div>
      )
}

export default HomePage;
