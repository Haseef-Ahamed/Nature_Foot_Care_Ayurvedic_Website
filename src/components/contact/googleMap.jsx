import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const MapSection = () => {
  return (
    <section className="px-6 md:px-20 py-0 bg-amber-50">
      {/* Header */}
      <div
        className="pl-4 flex items-center justify-center text-[#6B9A75] pt-4 md:pt-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p className="flex mb-5">
          <FiPlusCircle className="w-5 h-5" />
          &nbsp; FIND US HERE
        </p>
      </div>

      {/* Two Maps – Mobile: stacked | Desktop: side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* ---------- FIRST LOCATION (updated) ---------- */}
        <div>
          <h3 className="text-center text-lg font-semibold text-gray-800 mb-2">
            Wellawatte Branch
          </h3>
          <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1214983941386!2d79.85992530990195!3d6.87604359309409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bb817e0d489%3A0x6ca6fee836c13af1!2sVVG7%2BC2M%2C%2057%20W.A.%20Silva%20Mawatha%2C%20Colombo%2000600!5e0!3m2!1sen!2slk!4v1763131983902!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Main Clinic – W.A. Silva Mw"
            ></iframe>
          </div>
        </div>

        {/* ---------- SECOND LOCATION (unchanged) ---------- */}
        <div>
          <h3 className="text-center text-lg font-semibold text-gray-800 mb-2">
            Bambalapitya Branch
          </h3>
          <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.2500485851584!2d79.8572679!3d6.8905786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdc7dc5d70d%3A0x9b92274179da602!2sVVR4%2B6WV%2C%208a%20Vajira%20Rd%2C%20Colombo%2000400!5e0!3m2!1sen!2slk!4v1763131763368!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Branch – Vajira Rd, Colombo 00400"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MapSection;