import React from "react";
import { useEffect } from "react";
import Image1 from "../../assets/images/aboutus/About1.png";
import Image2 from "../../assets/images/aboutus/About2.png";
import Image3 from "../../assets/images/aboutus/About3.png";
import Image4 from "../../assets/images/aboutus/About6.png";
import { FiPlusCircle } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import AOS from "aos";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-amber-50">
      {/* === MAIN GRID === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0 md:mr-32 pb-12 md:pb-0">
        {/* === LEFT: IMAGES (Mobile: Centered, Desktop: Pushed Left) === */}
        <div
          className="
            grid grid-cols-2 gap-5 items-center justify-center 
            mt-6 md:mt-24 
            order-2 md:order-1 
            md:ml-20 md:mr-0
          "
        >
          {/* First Column */}
          <div className="flex flex-col gap-5 col-span-1">
            <img
              src={Image1}
              alt="Ayurvedic ingredients"
              className="w-full h-72 rounded-2xl object-cover"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <img
              src={Image2}
              alt="Spa setting"
              className="w-full h-52 rounded-2xl object-cover"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-5 col-span-1">
            <img
              src={Image3}
              alt="Woman receiving treatment"
              className="w-full h-52 rounded-2xl object-cover"
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <img
              src={Image4}
              alt="Ayurvedic wellness"
              className="w-full h-72 rounded-2xl object-cover"
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </div>
        </div>

        {/* === RIGHT: TEXT CONTENT === */}
        <div className="order-1 md:order-2 flex flex-col justify-center">
          {/* About Us Tag */}
          <div
            className="text-[#6B9A75] pt-8 text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p className="flex items-center justify-center">
              <FiPlusCircle className="mt-1 w-5 h-5" />
              &nbsp; ABOUT US
            </p>
          </div>

          <div className="px-1 md:px-4 mt-4">
            {/* === MAIN HEADING === */}
            <div
              className="mb-6 md:mb-8 text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Desktop */}
              <h1 className="hidden md:block text-[56px] text-[#112025] font-medium leading-tight">
                <span className="whitespace-nowrap">Sanctuary for Ayurvedic</span>
                <br />
                <span className="whitespace-nowrap">Healing and Wellness</span>
              </h1>

              {/* Mobile */}
              <h1 className="md:hidden text-[32px] text-[#112025] font-medium leading-tight">
                <span className="whitespace-nowrap">Sanctuary for Ayurvedic</span>
                <br />
                <span className="whitespace-nowrap">Healing and Wellness</span>
              </h1>
            </div>

            {/* Description */}
            <div
              className="font-sans text-[16px] text-[#696969] text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="mb-3">
                Nature Foot Care Ayurveda is a wellness center specializing in Ayurvedic foot care therapies, offering natural healing through traditional Ayurvedic practices.
              </p>
              <p className="hidden md:block">
                At Nature Foot Care Ayurveda, we embrace the ancient wisdom of
                Ayurveda to promote holistic wellness and natural healing. Our
                sanctuary is dedicated to helping you find balance,
                rejuvenation, and serenity through authentic therapies rooted in
                tradition.
              </p>
            </div>

            {/* Expertise Section */}
            <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-[18px] mb-5 md:text-[24px] flex items-center justify-center md:justify-start">
                <FiCheck className="md:hidden border p-1 w-5 h-5 rounded-full text-[#5C9269] mr-4" />
                <span className="hidden md:inline">
                  <FiCheck className="border p-1 w-6 h-6 rounded-full text-[#5C9269] mr-4" />
                </span>
                Ayurvedic Expertise
              </h2>
              <p className="font-sans text-[#696969] text-[16px] mt-3 text-center md:text-left">
                With years of experience and deep knowledge of Ayurveda, our
                practitioners bring you personalized treatments designed to
                restore harmony between mind, body, and spirit. From soothing
                foot therapies to specialized wellness rituals, every treatment
                is carried out with care, authenticity, and dedication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;