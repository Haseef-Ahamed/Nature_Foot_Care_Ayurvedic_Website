import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import DetailsCard from "../components/treatments/detailsCard";
import Service1 from "../assets/images/footMassage.jpg";
import Service2 from "../assets/images/foot-massage1.png";
import Service3 from "../assets/images/face-massage.png";
import Service4 from "../assets/images/nasya.png";
import Service5 from "../assets/images/shirod.png";
import Service6 from "../assets/images/vasti.png";
import Service7 from "../assets/images/Fish.jpg";
import Service8 from "../assets/images/steamn.png";
import Service9 from "../assets/images/ped2.png";
import Service10 from "../assets/images/manicure.png";
import HeroBackground from "../assets/images/treatmenthero.webp";
import WhyChooseUs from "../components/whyChooseUs";
import Icon1 from "../assets/images/icons-UGGEC4D_4.png";
import Icon2 from "../assets/images/icons-UGGEC4D_9.png";
import Icon3 from "../assets/images/icons-UGGEC4D_5.png";
import Icon4 from "../assets/images/icons-UGGEC4D_6.png";
import Icon5 from "../assets/images/icons-UGGEC4D_7.png";
import Icon6 from "../assets/images/icons-UGGEC4D_8.png";
import TreatmentBottom from "../assets/images/images-PZE6K9S.jpg";
import FaqSection from "../components/FaqSection";
import FaqImage from "../assets/images/faqsectionj.jpg";
// import FaqImage from "../assets/images/FAQ2.webp";
// import FaqImage from "../assets/images/FAQ1.png";
import Footer from "../components/Footer";
import IntroSection from "../components/treatments/introSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiSearch, FiX } from "react-icons/fi";


const treatments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTreatments, setFilteredTreatments] = useState([]);
  const location = useLocation();

  // All treatments data
  // All treatments data
  const treatments = [
    {
      id: 1,
      title: "Signature Foot Massage (Oil Massage)",
      description: "The Signature Foot Massage is a rejuvenating Ayurvedic therapy that focuses on vital pressure points in the feet to restore energy flow and balance. Using warm herbal oils and rhythmic strokes, it relieves fatigue, improves circulation, and soothes the nervous system, leaving you relaxed, refreshed, and deeply revitalized from head to toe.",
      price: "Rs. 5500",
      duration: "30 min / 45 min / 1 hour",
      image: Service1,
    },
    {
      id: 2,
      title: "Luxury Foot Massage",
      description: "The Luxury Foot Massage offers a blissful blend of relaxation and rejuvenation. Using aromatic essential oils and gentle Ayurvedic techniques, it soothes tired feet, improves blood circulation, and melts away stress. This indulgent treatment nourishes the skin, eases tension, and restores harmony to body and mind, leaving you feeling refreshed and renewed.",
      price: "Rs. 4500",
      duration: "30 min / 45 min / 1 hour",
      image: Service2,
    },
    {
      id: 3,
      title: "Ayurvedic Face Massage",
      description: "The Ayurvedic Face Massage is a rejuvenating therapy that enhances natural glow and promotes youthful skin. Using warm herbal oils and gentle rhythmic strokes, it improves blood circulation, tones facial muscles, and reduces stress. This relaxing treatment detoxifies the skin, relieves tension, and restores radiant beauty, leaving your face refreshed and revitalized.",
      price: "Rs. 2000",
      duration: "30 min / 45 min / 1 hour",
      image: Service3,
    },
    {
      id: 4,
      title: "Nasya Karma (Oil & Steam Therapy)",
      description: "Nasakarma is a traditional Ayurvedic therapy that purifies and rejuvenates the head region. Medicated oils or herbal extracts are gently administered through the nostrils to clear sinus congestion, improve breathing, and enhance mental clarity. It helps relieve headaches, migraines, allergies, and stress while promoting overall balance and well-being.",
      price: "Rs. 3000",
      duration: "30 min / 45 min / 1 hour",
      image: Service4,
    },
    {
      id: 5,
      title: "Shirodhara",
      description: "Shirodhara is a deeply relaxing Ayurvedic therapy where warm herbal oil is gently poured over the forehead in a continuous stream. This treatment calms the mind, relieves stress, anxiety, and insomnia, and enhances mental clarity. It also nourishes the scalp, improves sleep quality, and promotes emotional balance and overall wellness.",
      price: "Rs. 3500",
      duration: "30 min / 45 min / 1 hour",
      image: Service5,
    },
    {
      id: 6,
      title: "Vasti",
      description: "Vasti is a powerful Ayurvedic therapy that involves administering warm medicated oils or herbal decoctions into the colon to cleanse and balance the body. It effectively removes toxins, strengthens the nervous system, and relieves joint pain, constipation, and lower back issues. Vasti promotes detoxification, nourishment, and overall vitality for improved health and well-being.",
      price: "Rs. 3500",
      duration: "30 min / 45 min / 1 hour",
      image: Service6,
    },
    {
      id: 7,
      title: "Fish Therapy",
      description: "Fish Therapy is a natural and refreshing treatment where tiny fish gently exfoliate your feet by removing dead skin cells. This soothing process enhances blood circulation, softens rough skin, and promotes deep relaxation. It offers a unique, ticklish sensation that leaves your feet feeling smooth, refreshed, and beautifully revitalized with a healthy glow.",
      price: "Rs. 1500",
      duration: "15 min / 30 min / 45 min / 1 hour",
      image: Service7,
    },
    {
      id: 8,
      title: "Steam Bath",
      description: "The Steam Bath is a traditional Ayurvedic detox therapy that opens pores and eliminates toxins through gentle herbal steam. It relaxes muscles, enhances blood circulation, and promotes deep cleansing of the skin. This rejuvenating treatment relieves stress, supports weight management, and leaves your body refreshed, revitalized, and glowing with renewed energy and vitality.",
      price: "Rs. 1500",
      duration: "30 min / 45 min / 1 hour",
      image: Service8,
    },
    {
      id: 9,
      title: "Manicure / Pedicure",
      description: "Our Pedicure and Manicure treatments provide nourishing care for hands and feet. The process includes cleansing, exfoliation, nail shaping, cuticle care, and soothing massage using herbal and aromatic products. This relaxing therapy softens skin, boosts circulation, eases tension, and leaves nails looking healthy, elegant, and beautifully polished for a refreshing, luxurious experience.",
      price: "Rs. 2500",
      duration: "30 min / 45 min / 1 hour",
      image: Service9,
    },
    // {
    //   id: 10,
    //   title: "Manicure",
    //   description: "The Manicure treatment is a luxurious hand care therapy that nourishes and beautifies your nails and skin. It includes cleansing, exfoliation, nail shaping, cuticle care, and a soothing massage with rich herbal creams. This relaxing treatment improves blood circulation, softens the hands, and leaves them looking elegant, healthy, and perfectly polished.",
    //   price: "Rs. 3000",
    //   duration: "30 min / 45 min / 1 hour",
    //   image: Service10,
    // },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    
    // Initialize with all treatments
    setFilteredTreatments(treatments);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Use a timeout to ensure the element is rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);
  
  // Search function
  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    if (searchTerm === "") {
      setFilteredTreatments(treatments);
    } else {
      const filtered = treatments.filter(treatment =>
        treatment.title.toLowerCase().includes(lowercasedSearchTerm) ||
        treatment.description.toLowerCase().includes(lowercasedSearchTerm) ||
        treatment.price.toLowerCase().includes(lowercasedSearchTerm) ||
        treatment.duration.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredTreatments(filtered);
    }
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="bg-amber-50">
      <div data-aos="fade-down">
        <HeroSection
          title="Our Treatments"
          breadcrumb={["Home", "Treatments"]}
          backgroundImage={HeroBackground}
        />
      </div>

      <div data-aos="fade-up">
        <IntroSection />
      </div>

      {/* Search Bar Section */}
      <div className="max-w-7xl mx-auto px-4 py-6" data-aos="fade-up" data-aos-delay="50">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search treatments, therapy, massage..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FiX className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Search Results Counter */}
          <div className="mt-3 text-sm text-gray-600">
            {searchTerm ? (
              <span>
                Showing {filteredTreatments.length} of {treatments.length} treatments
                {searchTerm && <span className="font-medium"> for "{searchTerm}"</span>}
              </span>
            ) : (
              <span>Showing all {treatments.length} treatments</span>
            )}
          </div>
        </div>
      </div>

      {/* Treatment Cards Grid */}
      <div id="treatment-cards" className="max-w-7xl mx-auto px-4 py-2 pb-12">
        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.map((treatment, index) => (
              <div key={treatment.id} id={`treatment-${treatment.id}`} data-aos="fade-up" data-aos-delay={100 + (index * 50)}>
                <DetailsCard
                  title={treatment.title}
                  description={treatment.description} 
                  price={treatment.price}
                  duration={treatment.duration}
                  image={treatment.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12" data-aos="fade-up">
            <div className="max-w-md mx-auto">
              <FiSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No treatments found</h3>
              <p className="text-gray-500 mb-4">
                We couldn't find any treatments matching "{searchTerm}". Try searching with different keywords.
              </p>
              <button
                onClick={clearSearch}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
              >
                Show All Treatments
              </button>
            </div>
          </div>
        )}
      </div>
      {/* WhyChooseUs with green background overlay */}
      <div className="relative pb-40" data-aos="fade-up" data-aos-delay="300">
        {/* Green background that covers the bottom half */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-green-950 z-0"></div>

        {/* WhyChooseUs component positioned on top */}
        <div className="relative z-10">
          <WhyChooseUs
            title="The Ultimate Ayurvedic Wellness Experience"
            backgroundImage={TreatmentBottom}
            features={[
              {
                icon: (
                  <img
                    src={Icon1}
                    alt="Natural Ingredients"
                    className="w-12 h-12"
                  />
                ),
                title: "Authentic Ayurveda",
                description:
                  "Experience true Ayurvedic healing rooted in ancient wisdom and timeless traditions, carefully adapted to modern wellness needs.",
              },
              {
                icon: (
                  <img
                    src={Icon2}
                    alt="Natural Healing Methods"
                    className="w-12 h-12"
                  />
                ),
                title: "Expert Practitioners",
                description:
                  "Our therapies are delivered by skilled Ayurvedic practitioners who combine knowledge, care, and experience to guide your healing journey.",
              },
              {
                icon: (
                  <img
                    src={Icon3}
                    alt="Holistic Approach"
                    className="w-12 h-12"
                  />
                ),
                title: "Natural Ingredients",
                description:
                  "We use only pure, herbal oils and natural remedies, ensuring safe, sustainable, and effective treatments for your well-being.",
              },
              {
                icon: (
                  <img
                    src={Icon4}
                    alt="Personalized Care"
                    className="w-12 h-12"
                  />
                ),
                title: "Serene Environment",
                description:
                  "Step into a tranquil sanctuary designed to calm your mind, relax your body, and nurture your spirit in complete harmony.",
              },
              {
                icon: (
                  <img
                    src={Icon5}
                    alt="Personalized Care"
                    className="w-12 h-12"
                  />
                ),
                title: "Personalized Care",
                description:
                  "Every treatment is customized to your unique needs, helping you achieve balance, rejuvenation, and long-lasting results.",
              },
              {
                icon: (
                  <img src={Icon6} alt="Proven Results" className="w-12 h-12" />
                ),
                title: "Proven Results",
                description:
                  "Trusted by our clients, we deliver consistent wellness outcomes — from stress relief and improved circulation to deep relaxation and inner peace.",
              },
            ]}
          />
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-delay="350">
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default treatments;
