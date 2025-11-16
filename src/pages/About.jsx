import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/about/AboutUs";
import CoreValues from "../components/about/CoreValue";
import ShowcaseAbout from "../components/about/ShowcaseAbout";
import FaqImage from "../assets/images/faqsectionj.jpg"

import NatureFootCare from "../components/about/NatureFootCare";
import FaqSection from "../components/FaqSection";

import BackgroundImage from "../assets/images/about_hero.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div data-aos="fade-down">
        <HeroSection
          title="About Us"
          breadcrumb={["Home", "About Us"]}
          backgroundImage={BackgroundImage}
        />
      </div>
      <AboutUs />

      <CoreValues />
      <NatureFootCare ctaText="View Treatments" />
      <ShowcaseAbout />
      <FaqSection 
        faqImage={FaqImage}
        image
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
          ]}
        />
      <Footer />
    </div>
  );
};

export default About;
