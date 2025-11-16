import React from "react";
import Image1 from "../../assets/Images/process.jpg";
import { FiPlusCircle } from "react-icons/fi";

const Process = () => {
  return (
    <div className="min-h-screen md:pb-12 bg-amber-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-0 md:mr-32 pb-12 md:pb-0">
        <div
          className="flex flex-col md:flex-row items-center justify-center md:justify-end mt-12 md:mt-12 order-2 md:order-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={Image1}
            alt="Woman receiving treatment"
            className="w-full h-[90%] max-w-[390px] md:w-[70%] md:max-w-[700px] rounded-3xl md:ml-32 mr-4 md:mt-0 ml-4 object-cover"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <div
            className="pl-1 md:pl-4  text-[#6B9A75] md:pt-16"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p className="flex items-center justify-center">
              <FiPlusCircle className="mt1 w-5 h-5" />
              &nbsp; OUR PROCESS
            </p>
          </div>
          <div className="container mx-auto px-1 md:px-4 mt-4">
            <div
              className="flex justify-between items-center mb-6 md:mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="hidden md:block text-[56px] text-[#112025] font-medium">
                Holistic Steps to Wellness and Healing
              </h1>
              <h1 className="md:hidden flex justify-center items-center text-center text-[32px] text-[#112025] font-medium">
                Holistic Steps to Wellness and Healing
              </h1>
            </div>
            <div
              className="flex font-sans text-[16px] text-[#696969]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="hidden md:block">
                At Nature Foot Care Ayurveda, we follow a step-by-step approach
                to ensure every guest receives the most authentic and effective
                wellness experience.
              </p>
              <p className="md:hidden">
                At Nature Foot Care Ayurveda, we follow a step-by-step approach
                to ensure every guest receives the most authentic and effective
                wellness experience.
              </p>
            </div>
            <div
              className="mt-8 relative pl-16"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Vertical dotted line */}
              <div className="absolute top-12 left-6 h-[calc(100%-3rem)] border-l-4 border-dotted border-[#112025]"></div>
              {/* Number */}
              <div className="absolute top-0 left-0 w-12  flex items-center justify-center text-[#112025] font-bold text-[18px] md:text-[24px]">
                01
              </div>
              <h2 className="text-[18px] mb-2 md:text-[24px]">
                Initial Consultant
              </h2>
              <span className="block font-sans text-[#696969] text-[16px]">
                {" "}
                Your journey begins with a warm, personalized consultation. Our
                Ayurvedic practitioners take time to understand your lifestyle,
                health history, and unique needs.
              </span>
            </div>
            <div
              className="mt-8 relative pl-16"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Vertical dotted line */}
              <div className="absolute top-12 left-6 h-[calc(100%-3rem)] border-l-4 border-dotted border-[#112025]"></div>
              {/* Number */}
              <div className="absolute top-0 left-0 w-12  flex items-center justify-center text-[#112025] font-bold text-[18px] md:text-[24px]">
                02
              </div>
              <h2 className="text-[18px] mb-2 md:text-[24px]">
                Customized Wellness Plan
              </h2>
              <span className="block font-sans text-[#696969] text-[16px]">
                {" "}
                Using Ayurvedic principles and your dosha (body constitution),
                we design a tailored treatment plan to restore balance and
                support your health goals.
              </span>
            </div>
            <div
              className="mt-8 relative pl-16"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Vertical dotted line */}
              <div className="absolute top-12 left-6 h-[calc(100%-3rem)] border-l-4 border-dotted border-[#112025]"></div>
              {/* Number */}
              <div className="absolute top-0 left-0 w-12  flex items-center justify-center text-[#112025] font-bold text-[18px] md:text-[24px]">
                03
              </div>
              <h2 className="text-[18px] mb-2 md:text-[24px]">
                Therapeutic Sessions
              </h2>
              <span className="block font-sans text-[#696969] text-[16px]">
                {" "}
                Enjoy our range of healing therapies, including traditional
                massages, detox treatments, steam baths, and specialized
                Ayurvedic rituals that nurture body, mind, and spirit.
              </span>
            </div>
            <div
              className="mt-8 relative pl-16"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Vertical dotted line */}
              <div className="absolute top-12 left-6 h-[calc(100%-3rem)] border-l-4 border-dotted border-[#112025]"></div>
              {/* Number */}
              <div className="absolute top-0 left-0 w-12  flex items-center justify-center text-[#112025] font-bold text-[18px] md:text-[24px]">
                04
              </div>
              <h2 className="text-[18px] mb-2 md:text-[24px]">
                Ongoing Support & Care
              </h2>
              <span className="block font-sans text-[#696969] text-[16px]">
                {" "}
                Wellness is a journey, not a one-time experience. We provide
                guidance on lifestyle, diet, and aftercare to help you maintain
                balance and long-lasting results.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
