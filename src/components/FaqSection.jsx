import React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "react/jsx-runtime";
import { FiCheck } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

export default function FaqSection({
  subtitle = "FAQs",
  title = "Frequently Asked Questions",
  faqImage,
  faqs = [],
  // imageHeight,
}) {
  // Simple accordion implementation
  const [openIndex, setOpenIndex] = useState(null);
  const [contentHeight, setContentHeight] = useState('auto');
  const rightContentRef = useRef(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

   // Update image height when content height changes or accordion toggles
  useEffect(() => {
    if (rightContentRef.current) {
      const height = rightContentRef.current.offsetHeight;
      setContentHeight(`${height}px`);
    }
  }, [openIndex, faqs]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <p className="text-sm flex items-center justify-center uppercase tracking-wide mb-8 text-green-700">
        <FiPlusCircle className="mt1 w-5 h-5" /> &nbsp;
        {subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-start">
        {/* Left Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={faqImage}
            alt="FAQ Illustration"
            className="object-cover w-full h-full md:h-auto"
            style={{ height: contentHeight, width: "100%" }}
          />
        </div>

        {/* Right Content */}
        <div ref={rightContentRef} className="md:pt-0">
          {/* Subtitle */}

          {/* Title */}
          <h2 className="text-6xl flex items-center justify-center md:justify-start text-center md:text-start font-semi-bold mb-13">
            {title}
          </h2>

          {/* Custom Accordion */}
          <div className="w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full py-4 text-left text-lg font-medium"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span className="transform transition-transform duration-200">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
