import React from "react"
import Header from "./Header"

export default function HeroSection({ 
  title, 
  breadcrumb = [],
  backgroundImage 
}) {
  return (
    <div 
      id="hero-section"
      className="relative w-full h-[700px] md:h-[600px] flex flex-col text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Header positioned on top of hero section with z-index */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h1 className="text-6xl  font-bold mb-4 -mt-16">{title}</h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
          {breadcrumb.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <span className={index === breadcrumb.length - 1 ? "text-gray-200" : "text-gray-300"}>
                {item}
              </span>
              {index < breadcrumb.length - 1 && <span>➝</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}