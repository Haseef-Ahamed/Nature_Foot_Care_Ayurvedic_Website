import React from 'react'
import Hero from "../components/home/Hero";
import Showcase from '../components/home/Showcase';
import Testimonials from '../components/home/Testimonials';
import AboutUs from '../components/home/AboutUs';
import Process from '../components/home/Process';
import Footer from '../components/Footer';
import FaqSection from '../components/FaqSection';
import NatureFootCare from '../components/about/NatureFootCare';
import { FiPlusCircle } from "react-icons/fi";


const Home = () => {
  
  return (
    <>
        <Hero />
        <AboutUs />
        <Process />
        <NatureFootCare ctaText="Explore Our Treatments" />
        <Testimonials />
        <Showcase />
        {/* <FaqSection 
          faqImage=''
          imageHeight="0"
           faqs={[
            {
              question: "What is Nature Foot Care Ayurveda’s approach to wellness?",
              answer:
                "We embrace the timeless principles of Ayurveda, offering personalized treatments that restore balance to the mind, body, and spirit. Using natural remedies and holistic practices, our therapies promote relaxation, healing, and long-term well-being.",
            },
            {
              question: "Are the treatments safe and natural?",
              answer:
                "Yes, all our therapies are rooted in Ayurveda and use only herbal oils, natural remedies, and safe practices, making them gentle yet highly effective.",
            },
            {
              question: "What should I wear during the treatment?",
              answer:
                "We provide comfortable attire and towels as needed. For most therapies, loose clothing is recommended to help you relax.",
            },
            {
              question: "Can the treatments help with stress and body pain?",
              answer:
                "Absolutely. Our Ayurvedic massages and therapies are designed to relieve muscle tension, improve circulation, calm the mind, and ease stress-related discomfort.",
            },
            {
              question: "How are treatments personalized?",
              answer:
                "Before each session, our practitioners understand your unique needs and health goals. Based on Ayurvedic principles, the treatment is customized with suitable oils, techniques, and duration.",
            },
            {
              question: "Is Ayurveda only for people with health issues?",
              answer:
                "Not at all! Ayurveda is for everyone. While it helps manage specific concerns, it is also a wonderful way to maintain balance, improve energy, and enjoy overall wellness.",
            },
            <details>
              <summary>Is Ayurveda only for people with health issues?</summary>
              <p>Not at all! Ayurveda is for everyone. While it helps manage specific concerns, it is also a wonderful way to maintain balance, improve energy, and enjoy overall wellness.</p>
            </details>
          ]}
          
        /> */}
        {/* FAQ Section */}
        <div className="bg-amber-50 pb-10 pt-16 md:pt-12">
          <div
            className="pl-4  text-[#6B9A75]  md:pt-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="flex items-center justify-center">
              <FiPlusCircle className=" w-5 h-5" />
              &nbsp; FAQs
            </p>
          </div>
          <div className="container mx-auto px-4">
            <div
              className="flex justify-center text-center items-center mb-6 "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="text-[32px] md:text-[56px] text-[#112025]">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
          
          <div className='max-w-3xl mx-auto'>
            <details className='mt-2 mb-3 ml-2 md:ml-0 mr-2' data-aos="fade-up" data-aos-delay="400">
              <summary className="cursor-pointer text-lg">What is Nature Foot Care Ayurveda’s approach to wellness? </summary>
              <p className="flex justify-start items-start text-start pb-4 text-gray-600 text-sm leading-relaxed">We embrace the timeless principles of Ayurveda, offering personalized treatments that restore balance to the mind, body, and spirit. Using natural remedies and holistic practices, our therapies promote relaxation, healing, and long-term well-being.</p>
            </details>
            <hr className='text-gray-400' data-aos="fade-up" data-aos-delay="400"/>
            <details className='mt-2 mb-3  ml-2 md:ml-0 mr-2' data-aos="fade-up" data-aos-delay="500">
              <summary className="cursor-pointer text-lg">Are the treatments safe and natural?</summary>
              <p className="flex justify-start items-start text-start pb-4 text-gray-600 text-sm leading-relaxed">Yes, all our therapies are rooted in Ayurveda and use only herbal oils, natural remedies, and safe practices, making them gentle yet highly effective.</p>
            </details>
            <hr className='text-gray-400' data-aos="fade-up" data-aos-delay="500"/>
            <details className='mt-2 mb-3  ml-2 md:ml-0 mr-2 ' data-aos="fade-up" data-aos-delay="600">
              <summary className="cursor-pointer text-lg">What should I wear during the treatment?</summary>
              <p className="flex justify-start items-start text-start pb-4 text-gray-600 text-sm leading-relaxed">We provide comfortable attire and towels as needed. For most therapies, loose clothing is recommended to help you relax.</p>
            </details>
            <hr className='text-gray-400' data-aos="fade-up" data-aos-delay="600"/>
            <details className='mt-2 mb-3  ml-2 md:ml-0 mr-2' data-aos="fade-up" data-aos-delay="700">
              <summary className="cursor-pointer text-lg">Can the treatments help with stress and body pain?</summary>
              <p className="flex justify-start items-start text-start pb-4 text-gray-600 text-sm leading-relaxed">Absolutely. Our Ayurvedic massages and therapies are designed to relieve muscle tension, improve circulation, calm the mind, and ease stress-related discomfort.</p>
            </details>
            <hr className='text-gray-400' data-aos="fade-up" data-aos-delay="700"/>
            <details className='mt-2 mb-3  ml-2 md:ml-0 mr-2' data-aos="fade-up" data-aos-delay="800">
              <summary className="cursor-pointer text-lg">How are treatments personalized?</summary>
              <p className="flex justify-start items-start text-start pb-4 text-gray-600 text-sm leading-relaxed">Before each session, our practitioners understand your unique needs and health goals. Based on Ayurvedic principles, the treatment is customized with suitable oils, techniques, and duration.</p>
            </details>
            <hr className='text-gray-400' data-aos="fade-up" data-aos-delay="800"/>
            <details className='mt-2 mb-3  ml-2 md:ml-0 mr-2' data-aos="fade-up" data-aos-delay="900">
              <summary className="cursor-pointer text-lg">Is Ayurveda only for people with health issues?</summary>
              <p className="flex justify-start items-start text-start pb-4 text-gray-600 text-sm leading-relaxed">Not at all! Ayurveda is for everyone. While it helps manage specific concerns, it is also a wonderful way to maintain balance, improve energy, and enjoy overall wellness.</p>
            </details>
            <hr className='text-gray-400 mb-12' data-aos="fade-up" data-aos-delay="900"/>
          </div>
        </div>

        <Footer/>
    </>
  )
}

export default Home