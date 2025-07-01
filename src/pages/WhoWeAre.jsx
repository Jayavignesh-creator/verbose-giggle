import React, { useState } from "react";
import innovationImg from "../assets/Innovation-amico.png";

// Each object must have a unique label as key
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

const AboutUs = React.forwardRef((props, ref) => {
  const labels = Object.keys(subpoints);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-white"
    >
      <div className="w-full flex justify-start mb-16">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full min-w-[276px]">
        {labels.map((label, index) => {
          const isHovered = hoveredIndex === index;
          const nested = subpoints[label];

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-gray-50 h-[420px] transition-all duration-300 transform hover:scale-[1.05] ease-in-out"
            >
              {/* Image above label (only visible when not hovered) */}
              {/* <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src={innovationImg}
                  alt="Innovation"
                  style={{ height: "200px", width: "200px" }}
                  className="object-contain"
                />
              </div> */}

              {/* Bottom Right Label (Disappears on Hover) */}
              <div className="absolute bottom-5 right-4 flex justify-center transition-all duration-300">
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

              {/* Nested Subpoints (Appear on Hover) */}
              <div
                className={`absolute top-6 left-0 w-full h-full px-6 transition-all duration-500 ${
                  isHovered
                    ? "opacity-100 translate-x-0 delay-150"
                    : "opacity-0 translate-x-10 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-6 mt-4">
                  {Object.entries(nested).map(([subHeader, detail], i) => {
                    const parts = subHeader.split("&");
                    const hasAmpersand = parts.length === 2;

                    return (
                      <div key={i}>
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
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default AboutUs;
