import React from 'react'
import OilDropImage from '../../assets/Images/OilDropping.jpg'
import QuoteIcon from '../../assets/Images/testimonial-icon.png'
import SignatureImage from '../../assets/Images/Signature.png'

const CEOMessage = () => {
  return (
    <div className='relative w-full h-[452px] md:h-[400px] bg-amber-50' data-aos="fade-up" data-aos-delay="100">
        <img src={OilDropImage} alt="" className='absolute inset-0 bg-cover bg-amber-50 bg-no-repeat w-full h-[452px] md:h-[400px] object-cover object-center' />
        {/* Dark overlay applied only to the background */}
        <div className="absolute inset-0 bg-[#112025]/70 z-10"></div>

        {/* Content positioned above the background and overlay */}
        <div className="relative z-10 pt-10">
          <img src={QuoteIcon} alt="Quotation mark icon" className='w-[64px] h-[64px] mx-auto' data-aos="fade-up" data-aos-delay="200"/>
          <p className=' sm:hidden text-[#C7C7C7] text-[22px] font-sans text-center mt-6' data-aos="fade-up" data-aos-delay="300">At Wivana, we're dedicated to <br /> helping you achieve balance, <br /> healing, and peace through <br /> personalized Ayurvedic care for <br /> mind, body, and spirit</p>
          <p className='hidden md:block lg:hidden text-[#C7C7C7] text-[22px] font-sans text-center mt-6' data-aos="fade-up" data-aos-delay="300">At Wivana, we're dedicated to helping you achieve <br /> balance, healing, and peace through personalized <br /> Ayurvedic care for mind, body, and spirit</p>
          <p className='hidden lg:block md:hidden text-[#C7C7C7] text-[22px] font-sans text-center mt-6' data-aos="fade-up" data-aos-delay="300">At Wivana, we're dedicated to helping you achieve balance, healing, and peace <br /> through personalized Ayurvedic care for mind, body, and spirit</p>
          <img src={SignatureImage} alt="CEO Signature" className='w-[70px] h-[15px] md:w-[160px] md:h-[34px] mx-auto mt-12' data-aos="fade-up" data-aos-delay="400"/>
          <p className='text-center text-[#C7C7C7] font-sans mt-4' data-aos="fade-up" data-aos-delay="500">CEO of Wivana</p>
        </div>
    </div>
  )
}

export default CEOMessage