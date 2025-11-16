import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import TeamMember1 from '../../assets/Images/team/team-1.jpg'
import TeamMember2 from '../../assets/Images/team/team-2.jpg'
import TeamMember3 from '../../assets/Images/team/team-3.jpg'
import TeamMember4 from '../../assets/Images/team/team-4.jpg'
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-amber-50">

        {/* Our Team Header */}
        <div className='flex flex-col items-center pt-10 md:pt-24' data-aos="fade-up" data-aos-delay="200">
        <p className='flex justify-center text-[#5C9269]'><FiPlusCircle className=' w-5 h-5'/>&nbsp; OUR TEAM</p>
        </div> 
        <div className="container mx-auto flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
        <h1 className="text-[32px] md:text-[56px] text-[#112025] md:mt-4 mb-2">Our Wellness Specialists</h1>
        </div>
        
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-4 mr-4 md:ml-32 md:mr-32 pb-20">
          {/* Team Member 1 */}
          <div className="relative group rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="300">
            <img src={TeamMember1} alt="Team Member 1" className='rounded-2xl w-full h-full object-cover' />
            <div className="absolute inset-0 bg-[#112025]/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">Luna Sky</h3>
              <p className="text-[#C7C7C7] text-sm">Therapist</p>
              <div className="hidden md:flex items-center space-x-4 mt-8">
                {/* Social Media Icons */}
                <a href="#" className="text-white border border-white rounded-full p-2 hover:text-black hover:bg-white">
                    <FaFacebookF className=''/>
                </a>
                <a href="#" className="text-white hover:text-black border border-white rounded-full p-2 hover:bg-white">
                    <FiInstagram className=''/>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="relative group rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="400">
            <img src={TeamMember2} alt="Team Member 2" className='rounded-2xl w-full h-full object-cover' />
            <div className="absolute inset-0 bg-[#112025]/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">Sophia Reed</h3>
              <p className="text-[#C7C7C7] text-sm">Lead Therapist</p>
              <div className="hidden md:flex items-center space-x-4 mt-8">
                {/* Social Media Icons */}
                <a href="#" className="text-white border border-white rounded-full p-2 hover:text-black hover:bg-white">
                    <FaFacebookF className=''/>
                </a>
                <a href="#" className="text-white hover:text-black border border-white rounded-full p-2 hover:bg-white">
                    <FiInstagram className=''/>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative group rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="500">
            <img src={TeamMember3} alt="Team Member 3" className='rounded-2xl w-full h-full object-cover' />
            <div className="absolute inset-0 bg-[#112025]/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">Ella Harper</h3>
              <p className="text-[#C7C7C7] text-sm">Herbal Consultant</p>
              <div className="hidden md:flex items-center space-x-4 mt-8">
                {/* Social Media Icons */}
                <a href="#" className="text-white border border-white rounded-full p-2 hover:text-black hover:bg-white">
                    <FaFacebookF className=''/>
                </a>
                <a href="#" className="text-white hover:text-black border border-white rounded-full p-2 hover:bg-white">
                    <FiInstagram className=''/>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="relative group rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="600">
            <img src={TeamMember4} alt="Team Member 3" className='rounded-2xl w-full h-full object-cover' />
            <div className="absolute inset-0 bg-[#112025]/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">Zara Yema</h3>
              <p className="text-[#C7C7C7] text-sm">Yoga Instructor</p>
              <div className="hidden md:flex items-center space-x-4 mt-8">
                {/* Social Media Icons */}
                <a href="#" className="text-white border border-white rounded-full p-2 hover:text-black hover:bg-white">
                    <FaFacebookF className=''/>
                </a>
                <a href="#" className="text-white hover:text-black border border-white rounded-full p-2 hover:bg-white">
                    <FiInstagram className=''/>
                </a>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default OurTeam