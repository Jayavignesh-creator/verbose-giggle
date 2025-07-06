import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Import your images
import shapeAI from "../assets/innovation-pana.png";
import blocks from "../assets/blocks.png";
import strategy from "../assets/strategy.png";
import privacy from "../assets/privacy-policy.png";
import results from "../assets/deliver-results-1.png";

const subpoints = {
  "SHAPE YOUR AI VISION": {
    "ANALYTICS & DATA STRATEGY":
      "Craft roadmaps that align data capabilities with long-term business goals.",
    "AI & PLATFORM ADVISORY":
      "Navigate the evolving tech landscape with guidance on scalable, future-proof architectures.",
  },
  "BUILD THE FOUNDATION": {
    "DATA ENGINEERING":
      "Develop modern pipelines and infrastructure to support analytics and AI.",
    "DATA MODERNISATION":
      "Upgrade systems for agility, performance, and AI-readiness.",
  },
  "CREATE INTELLIGENCE": {
    "DATA SCIENCE & MACHINE LEARNING":
      "Build models that predict, optimise, and learn at scale.",
    "AGENTIC & GENERATIVE AI":
      "Deploy intelligent systems that can reason, converse, and act independently.",
  },
  "DELIVER RESULTS": {
    "BUSINESS INTELLIGENCE & DASHBOARDS":
      "Surface insights through intuitive, interactive visualisations.",
    "MLOPS & APP ENGINEERING":
      "Ensure models are production-ready, monitored, and delivering continuous value.",
  },
  "AUDIT AI": {
    "AI AUDITING STRATEGY":
      "Deliver a comprehensive, risk-aware, and policy-driven evaluation of AI systems — from model behavior to platform integrity.",
    "AI GOVERNANCE AUDITS":
      "Assess organizational readiness and alignment with global AI governance standards and data protection laws.",
  },
};

// Map labels to images
const cardImages = {
  "SHAPE YOUR AI VISION": strategy,
  "BUILD THE FOUNDATION": blocks,
  "CREATE INTELLIGENCE": shapeAI,
  "DELIVER RESULTS": results,
  "AUDIT AI": privacy,
};

const AboutUs = React.forwardRef((props, ref) => {
  const labels = Object.keys(subpoints);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: false, margin: "-100px" });

  const cardsRef = useRef(null);
  const areCardsInView = useInView(cardsRef, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-white"
    >
      {/* Header Text */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTextInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
        className="w-full flex justify-start mb-16"
      >
        <div className="text-left w-full">
          <h2 className="text-7xl font-bold text-gray-800 mb-4">
            From Strategy to Systems
          </h2>
          <h2 className="text-7xl font-bold text-primary-light mb-14">
            We Deliver Intelligence That Performs
          </h2>
          <p className="text-gray-600 text-2xl w-full">
            We offer end-to-end AI and data services to turn your business goals
            into intelligent, scalable solutions.
          </p>
        </div>
      </motion.div>

      {/* Card Grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full min-w-[276px]"
      >
        {labels.map((label, index) => {
          const isHovered = hoveredIndex === index;
          const nested = subpoints[label];
          const imageSrc = cardImages[label];

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              animate={
                areCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                delay: index * 0.1,
              }}
              className="relative bg-gray-50 h-[420px] transition-all duration-300 transform hover:scale-[1.05] ease-in-out overflow-hidden flex items-center justify-center px-6"
            >
              {/* Image centered inside card */}
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={label}
                  className={`w-[250px] h-[250px] object-contain transition-opacity duration-300 absolute top-12 z-0 ${
                    isHovered ? "opacity-0" : "opacity-100"
                  }`}
                />
              )}

              {/* Bottom right label */}
              <div className="absolute bottom-5 right-4 flex justify-center transition-all duration-300 z-10">
                <div
                  className={`transition-opacity duration-300 ${
                    isHovered ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-right text-base font-semibold text-gray-800">
                    {label}
                  </h3>
                  <div className="h-[2px] bg-primary-light w-8 mt-2 ml-auto" />
                </div>
              </div>

              {/* Hovered content */}
              <div
                className={`absolute top-6 left-0 w-full h-full transition-all duration-500 z-10 ${
                  isHovered
                    ? "opacity-100 translate-y-0 delay-100"
                    : "opacity-0 translate-y-10 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-6 mt-4">
                  {Object.entries(nested).map(([subHeader, detail], i) => {
                    const parts = subHeader.split("&");
                    const hasAmpersand = parts.length === 2;

                    return (
                      <div key={i} className="px-6">
                        <h4 className="text-base font-bold text-primary-light mb-1 leading-snug">
                          {hasAmpersand ? (
                            <>
                              {parts[0].trim()} &<br />
                              {parts[1].trim()}
                            </>
                          ) : (
                            subHeader
                          )}
                        </h4>
                        <p className="text-xs my-2 text-gray-600 break-words w-full">
                          {detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
});

export default AboutUs;
