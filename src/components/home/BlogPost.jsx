import React from 'react';
import Header from '../Header';
import { FiPlusCircle } from "react-icons/fi";
import Image1 from '../../assets/Images/blogpost/blog-post-1.jpg'
import Image2 from '../../assets/Images/blogpost/blog-post-2.jpg'
import Image3 from '../../assets/Images/blogpost/blog-post-3.jpg'

const Blog = () => {
  // Blog articles data
  const articles = [
    {
      id: 1,
      title: "Inner Harmony Awaits",
      date: "October 16, 2024",
      comments: 0,
      image: Image1,
      // excerpt: "Discover the path to inner peace through ancient Ayurvedic practices that balance mind, body, and spirit."
    },
    {
      id: 2,
      title: "Relax and Rejuvenate",
      date: "October 16, 2024",
      comments: 0,
      image: Image2,
      // excerpt: "Experience our signature relaxation therapies designed to melt away stress and restore your natural vitality."
    },
    {
      id: 3,
      title: "Customized Ayurvedic Therapies",
      date: "October 16, 2024",
      comments: 0,
      image: Image3,
      // excerpt: "Personalized treatment plans tailored to your unique constitution and wellness goals."
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <div className='pl-4 md:pl-40 text-[#6B9A75] pt12  md:pt-24' data-aos="fade-up" data-aos-delay="200">
          <p className='flex'><FiPlusCircle className=' w-5 h-5'/>&nbsp; BLOG POST</p>
      </div>
      
      {/* Blog Header */}
      <div className="container mx-auto px-4 pb-24">
        <div className="flex justify-between items-center mb-6 md:mb-12" data-aos="fade-up" data-aos-delay="400">
          <h1 className="text-[32px] md:text-[56px] md:pl-40 text-[#112025]">Latest Articles From <br /> Wivana</h1>
          <button className="hidden md:block bg-[#5C9269] font-sans hover:bg-[#224229] text-white py-3 px-6 text-[14px] mr-36 rounded-full cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
            More Articles
          </button>
        </div>
        <button className="block md:hidden bg-[#5C9269] font-sans ml-auto hover:bg-[#224229] text-white py-3 px-6 text-[14px] mb-12 rounded-full cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
          More Articles
        </button>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:ml-36 md:mr-36">
          {articles.map((article) => (
            <div key={article.id} className="group bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
              {/* Article Image */}
              <div className="h-56 bg-amber-200 relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                <h2 className="text-[24px] text-[#112025] mb-3" data-aos="fade-up" data-aos-delay="400">{article.title}</h2>
                
                <div className="flex items-center font-sans text-[16px] text-[#696969] mb-4" data-aos="fade-up" data-aos-delay="400">
                  <span>{article.title} {article.date} | {article.comments} comment Denoc...</span>
                  {/* <span>{article.date}</span> */}
                  {/* <span className="mx-2">|</span> */}
                  {/* <span>{article.comments} comments</span> */}
                </div>
                
                {/* <p className="text-[#696969] mb-6">{article.excerpt}</p> */}
                
                <button className="text-[#5C9269] text-[15px] font-sans hover:text-[#212529] transition duration-300 font-medium flex items-center cursor-pointer" data-aos="fade-up" data-aos-delay="400">
                  Learn more
                  {/* <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg> */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;