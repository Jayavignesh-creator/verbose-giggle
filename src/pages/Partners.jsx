import React from "react";

// Importing logos from assets folder
import Aws from "../assets/AmazonWebServices.png";
import DataBricks from "../assets/Databricks_1.png";
import GoogleCloud from "../assets/GoogleCloud.png";
import HuggingFace from "../assets/HuggingFace_1.png";
import MicrosoftAzure from "../assets/MicrosoftAzure.png";
import OpenAI from "../assets/OpenAI_1.png";
// import permanenttsb from "../assets/permanenttsb.png";
// import seai from "../assets/seai.png";
// import tourismireland from "../assets/tourismireland.png";
// import agriculture from "../assets/departmentofagriculture.png";
// import queens from "../assets/queensuniversitybelfast.png";

const logos = [
  Aws,
  DataBricks,
  GoogleCloud,
  HuggingFace,
  MicrosoftAzure,
  OpenAI,
];

const Partners = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    className="min-h-screen bg-white flex flex-col justify-center px-6 md:px-20 py-20 overflow-hidden"
  >
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
      {/* Left Side Heading */}
      <div className="lg:w-1/2">
        <h2 className="text-7xl font-bold text-red-600 leading-tight">
          Trusted by the World’s <br />
          Leading Platforms
        </h2>
      </div>

      {/* Right Side Paragraph */}
      <div className="lg:w-1/2 text-gray-700 text-2xl">
        <p className="mb-6">
          We collaborate with the world's most trusted platforms and pioneers in
          AI, cloud, and analytics — so you get future-ready solutions, faster.
          Our strategic alliances strengthen everything we build, from scalable
          infrastructure to cutting-edge GenAI and autonomous systems.
        </p>
        <a
          href="#"
          className="text-base font-medium text-gray-900 underline hover:text-red-600"
        >
          View All Partners
        </a>
      </div>
    </div>

    {/* Marquee Logo Strip */}
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex whitespace-nowrap animate-marquee space-x-[128px]">
        {[...logos, ...logos].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`partner-logo-${index}`}
            className="h-12 opacity-80 transition duration-300"
          />
        ))}
      </div>
    </div>
  </section>
));

export default Partners;
