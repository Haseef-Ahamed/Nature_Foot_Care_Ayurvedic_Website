import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import HeroImage from "../assets/images/contact_hero.jpg"


import Footer from '../components/Footer'
import ContactSection from '../components/contact/contactSection'
import MapSection from '../components/contact/googleMap'
import AOS from 'aos'
import 'aos/dist/aos.css'

const contact = () => {
  const locationCoordinates = { lat: 40.7128, lng: -74.0060 };
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-down">
        <HeroSection 
          title="Contact Us"
          breadcrumb={["Home", "Contact us"]}
          backgroundImage={HeroImage}
        />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="100">
        <ContactSection />
      </div>
      
      <section className="bg-[#fdf8e9] py-10">
        <MapSection />
      </section>

      <div data-aos="fade" data-aos-delay="400">
        <Footer/>
      </div>
    </div>
  )
}

export default contact