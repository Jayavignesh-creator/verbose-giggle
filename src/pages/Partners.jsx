import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Importing logos from assets folder
import Aws from "../assets/AmazonWebServices.png";
import DataBricks from "../assets/Databricks_1.png";
import GoogleCloud from "../assets/GoogleCloud.png";
import HuggingFace from "../assets/HuggingFace_1.png";
import MicrosoftAzure from "../assets/MicrosoftAzure.png";
import OpenAI from "../assets/OpenAI_1.png";

const logos = [
  Aws,
  DataBricks,
  GoogleCloud,
  HuggingFace,
  MicrosoftAzure,
  OpenAI,
];

const Partners = React.forwardRef((props, ref) => {
  const textBlockRef = useRef(null);
  const isInView = useInView(textBlockRef, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white flex flex-col justify-center px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* Heading + Paragraph with Animation */}
      <motion.div
        ref={textBlockRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
        className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16"
      >
        {/* Left Side Heading */}
        <div className="lg:w-1/2">
          <h2 className="text-7xl font-bold text-primary-light leading-tight">
            Trusted by the World’s <br />
            Leading Platforms
          </h2>
        </div>

        {/* Right Side Paragraph */}
        <div className="lg:w-1/2 text-gray-700 text-2xl">
          <p className="mb-6">
            We collaborate with the world's most trusted platforms and pioneers
            in AI, cloud, and analytics — so you get future-ready solutions,
            faster. Our strategic alliances strengthen everything we build, from
            scalable infrastructure to cutting-edge GenAI and autonomous
            systems.
          </p>
          <a
            href="#"
            className="text-base font-medium text-gray-900 underline hover:text-primary-light"
          >
            View All Partners
          </a>
        </div>
      </motion.div>

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
  );
});

export default Partners;
