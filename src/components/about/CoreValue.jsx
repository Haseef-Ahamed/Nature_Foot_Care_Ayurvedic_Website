import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { FaRegFaceGrin } from "react-icons/fa6";
import { FaMedrt } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";


const CoreValues = () => {
  // Core values data
  const coreValues = [
    {
      id: 1,
      title: "Healing",
      icon: <FaMedrt className='w-12 h-12'/>,
      description: 'Embark on a journey of natural recovery with Ayurvedic therapies tailored to restore your body’s harmony.​'
    },
    {
      id: 2,
      title: "Personalization",
      icon: <FaRegFaceGrin className='w-12 h-12'/>,
      description: 'Enjoy customized wellness plans designed to suit your unique health needs and lifestyle.​'    },
    {
      id: 3,
      title: "Authenticity",
      icon: <FaCheck className='w-12 h-12'/>,
      description: 'Discover genuine Ayurvedic practices rooted in ancient wisdom and tradition.​'    },
    {
      id: 4,
      title: "Sustainability",
      icon: <FaThumbsUp className='w-12 h-12'/>,
      description: 'Support eco-friendly practices with our sustainable product range.​'    },
    {
      id: 5,
      title: "Compassion",
      icon: <FaRegCompass className='w-12 h-12'/>,
      description: 'Feel the care and empathy in every session, provided by our dedicated team.​'    },
    {
      id: 6,
      title: "Balance",
      icon: <FaLeaf className='w-12 h-12'/>,
      description: 'Achieve inner peace and equilibrium through balanced Ayurvedic routines.​'    }
  ];

  return (
    <div className="bg-amber-50">
      
      {/* Core Values Header */}
      <div className='pl-4 flex items-center justify-center text-[#6B9A75] pt-10 md:pt-24' data-aos="fade-up" data-aos-delay="100">
        <p className='flex'><FiPlusCircle className=' w-5 h-5'/>&nbsp; CORE VALUES</p>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center text-center items-center md:mt-2 mb-4" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-[30px] md:text-[56px] pl-4  text-[#112025]">Holistic Steps to Wellness and Healing</h1>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 mr-4 md:ml-36 md:mr-40 pb-10">
        {coreValues.map((value) => (
          <div key={value.id} className="border border-gray-300 hover:border-gray-500 rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-aos="fade-up">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 text-green-800/70" data-aos="fade-up" data-aos-delay="300">
              {value.icon}
            </div>
            <h3 className="text-[24px] font-medium text-[#112015] mb-4" data-aos="fade-up" data-aos-delay="400">{value.title}</h3>
            <p className="text-[#696969] font-sans text-[16px]" data-aos="fade-up" data-aos-delay="500">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;