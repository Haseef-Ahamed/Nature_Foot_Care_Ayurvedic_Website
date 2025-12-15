import React, { useEffect, useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import Testi from '../../assets/images/testimonials/testi.svg';
import Testi1 from "../../assets/images/testimonials/1b.png";
import Testi2 from '../../assets/images/testimonials/2g.png';
import Testi4 from '../../assets/images/testimonials/3g.png';
import Testi3 from '../../assets/images/testimonials/4b.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Anura Wijesinghe",
      image: Testi1,
      content: "The Ayurvedic massage I received was transformative. The expert care left me feeling refreshed. Highly recommend this place! I’m already looking forward to my next visit to experience that same sense of peace and rejuvenation.",
      location : "Customer, Wellawatte"
    },
    {
      id: 2,
      name: "Nadeesha Perera",
      image: Testi2,
      content: "The personalized treatments here are exceptional. The staff’s knowledge of Sri Lankan herbal remedies truly enhanced my wellness journey. I left feeling deeply revitalized and connected to a sense of natural harmony.",
      location : "Customer, Dehiwala"
    },
    {
      id: 3,
      name: "Ruwan Mendis",
      image: Testi3,
      content: "A peaceful retreat with amazing foot care therapies. The natural setting and attentive staff made my experience unforgettable. I would gladly return to unwind and indulge in their soothing treatments again.",
      location : "Customer, Kollupitiya"
    },
    {
      id: 4,
      name: "Priyani Perera",
      image: Testi4,
      content: "This Avyrvedic spa offers a perfect blend of relaxation and rejuvenation. The calming ambiance and skilled therapists made every moment feel truly restorative. It’s an ideal escape for anyone seeking inner peace.",
      location : "Customer, Bambalapitiya"
    },
    {
      id: 5,
      name: "Jagath Botheju",
      // image: Testi5,
      content: 'The therapies were deeply relaxing, and the calming atmosphere made me feel completely at ease. This treatment leaves me refreshed and energized. I’ll definitely visit again for another round of relaxation.',
      location : "Customer, Thimbirigasyaya"
    },
    {
      id: 6,
      name: 'Dulan Indika',
      content: 'This Ayurvedic spa provides an incredible balance of healing and tranquility. The soothing atmosphere and expert therapists created an experience of deep renewal. It’s the perfect retreat for anyone yearning for harmony within.',
      location: 'Customer, Kirulapone'
    }
  ];


  return (
    <div className="min-h-[600px] md:min-h-[400px] bg-amber-50">
        <div className='text-center text-[#6B9A75] pt-6 md:pt-6' data-aos="fade-up" data-aos-delay="200">
            <p className='flex justify-center items-center'><FiPlusCircle className='w-5 h-5'/>&nbsp; TESTIMONIALS</p>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-6 md:mb-12" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-[32px] md:text-[56px] text-[#112025] text-center">What Our Customer Say</h1>
          </div>  
        </div>
        
        {isMobile ? (
          <div className="md:hidden px-10 mt-16" data-aos="fade-up" data-aos-delay="400">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-2 md:pb-8">
                  <div className="bg-white rounded-xl shadow-md p-6 h-[350px] flex flex-col justify-between">
                    <p className="text-[#696969] font-medium md:font-normal font-sans mb-12">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center mt-auto">
                      <div>
                        <h3 className="font-normal text-[#5C9269] text-[18px] ml-2 font-sans">{testimonial.name}</h3>
                        <p className='font-sans text-[13px] text-black/50 ml-2'>{testimonial.location}</p>
                      </div>
                      <img src={Testi} alt="" className='w-18 h-18 ml-auto'/>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
            <div className="hidden md:block px-10 mt-16" data-aos="fade-up" data-aos-delay="400">
              <Slider {...sliderSettings} className="max-w-7xl mx-auto">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="px-2 md:pb-8">
                    <div className="bg-white rounded-xl shadow-md md:p-6 h-full flex flex-col justify-between">
                      <p className="text-[#696969] font-medium md:font-normal font-sans mb-12">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center mt-auto">
                        <div>
                          <h3 className="font-normal text-[#5C9269] text-[18px] ml-2 font-sans">{testimonial.name}</h3>
                          <p className='font-sans text-[13px] text-black/50 ml-2'>{testimonial.location}</p>
                        </div>
                        <img src={Testi} alt="" className='w-18 h-18 ml-auto'/>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
        )}
    </div>
  )
}

export default Testimonials