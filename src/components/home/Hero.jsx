import React from 'react';
import { useEffect } from 'react';
import BGImage from '../../assets/Images/Home_hero.jpg'
import Header from '../Header';
import { FiPlusCircle } from "react-icons/fi";
import AOS from 'aos'

import {Link} from "react-router-dom"



const Hero = () => {
    useEffect(() => {
      // Check if user is coming from the site for the first time in this session
      if (!sessionStorage.getItem('whatsapp_welcome_sent')) {
        // WhatsApp number and message
        const whatsappNumber = '94742610334';
        const message = encodeURIComponent('Hello, welcome to Nature Foot Care Ayurveda! How can we assist you today?');
        // Open WhatsApp in a new tab with the welcome message
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        sessionStorage.setItem('whatsapp_welcome_sent', 'true');
      }
    }, []);

    useEffect(() => {
      
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });
    }, []);
  return (
      <div id="hero-section" className="relative h-screen md:h-screen bg-amber-50 overflow-hidden min-h-[650px]" data-aos="fade-down"> 
      {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat" 
          style={{ backgroundImage: `url(${BGImage})` }}
        >
          {/* Dark overlay applied only to the background */}
          <div className="absolute inset-0 bg-[#1D4026]/50 z-10"></div>
        </div>

      {/* Content positioned above the background and overlay */}
      <div className="relative z-10">
        <Header />

      {/* Main Content */}
      <main className="container mx-auto py-20 md:py-20" data-aos="fade-up">
        <div className="flex flex-col items-start">
          <div className='pl-4 md:pl-40 md:mt-4 text-white' data-aos="fade-up" data-aos-delay="200">
              <p className='flex text-[14px] md:text-[16px]'><FiPlusCircle className=' w-5 h-5'/>&nbsp; FOOT CARE, SOUL CARE</p>
          </div>

          <div className="pl-4 md:pl-40 mt-6 md:mt-0" data-aos="flip-up" data-aos-delay="600">
            <h1 className="hidden md:block text-3xl md:text-[80px] text-white  mb-6 mx-auto">
              Rebalance Your Mind, Body & Spirit with Ayurveda
            </h1>
            <h1 className="md:hidden mt-6 text-[40px] text-white mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">Rebalance Your Mind, Body & Spirit with Ayurveda</h1>
          </div>
          {/* <div className='ml-4 md:ml-40'>
            <p className='text-white/60 font-sans' data-aos="fade-up" data-aos-delay="400">Step into a sanctuary of natural healing. At Nature Foot Care and Ayurvedic Wellness, <br /> We bring you authentic Ayurvedic therapies designed for relaxation, rejuvenation, and inner harmony.</p>
          </div> */}
          <div className='ml-4 md:ml-40  mt-4  hover:text-black rounded-full text-white cursor-pointer' >
            
        <a
            href="https://wa.me/94742610334?text=Hello%2C%20I%20would%20like%20to%20make%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className='mt-16 md:mt-0 md:block bg-[#5C9269] hover:bg-white hover:text-black py-3 px-6 rounded-full  text-white cursor-pointer'>
              Book an Appointment
            </button>
          </a>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Hero;