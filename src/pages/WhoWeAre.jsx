import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { ArcherContainer, ArcherElement } from "react-archer";

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

const cornerOrigins = [
  "origin-bottom-right",
  "origin-bottom-left",
  "origin-top-right",
  "origin-top-left",
];

const subpoints = {
  Analytics: ["Predictive Models", "Insightful Dashboards"],
  "Agentic AI": ["Autonomous Flow", "Reasoning Agents"],
  "Data Engineering": ["Stream Pipelines", "Data Lake Design"],
  "Impact Strategy": ["Measurable Goals", "Business Alignment"],
};

const AboutUs = React.forwardRef((props, ref) => {
  const localRef = useRef(null);
  const isInView = useInView(localRef, {
    once: false,
    margin: "-100px",
    amount: 0.3,
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const labels = Object.keys(subpoints);

  return (
    <ArcherContainer>
      <section
        ref={(node) => {
          localRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {labels.map((label, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ ...springTransition, delay: index * 0.05 }}
              whileHover={{
                scale: 1.7,
                transition: { type: "spring", damping: 12 },
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative p-6 bg-gray-100 rounded-2xl shadow-md transform duration-300 hover:shadow-xl overflow-hidden flex items-center justify-between gap-6 ${cornerOrigins[index]} min-h-[160px]`}
            >
              {/* Animated Label Heading */}
              <ArcherElement
                id={`header-${index}`}
                relations={
                  hoveredIndex === index
                    ? [
                        {
                          targetId: `subtext-${index}-0`,
                          targetAnchor: "left",
                          sourceAnchor: "right",
                          style: { strokeColor: "black", strokeWidth: 1 },
                        },
                      ]
                    : []
                }
              >
                <motion.h3
                  animate={
                    hoveredIndex === index
                      ? {
                          x: "-50%",
                          y: "-50%",
                          position: "absolute",
                          left: "10%",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }
                      : {
                          // x: "50%",
                          // y: "50%",
                          position: "absolute",
                          left: "20%",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }
                  }
                  transition={springTransition}
                  className="text-2xl font-semibold text-gray-800"
                >
                  {label}
                </motion.h3>
              </ArcherElement>

              {/* Arrows and subpoints appear on the right */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col gap-4 ml-auto"
                >
                  {subpoints[label].map((text, i) => (
                    <ArcherElement key={i} id={`subtext-${index}-${i}`}>
                      <div
                        className="flex items-center gap-2"
                        // id={`subtext-${i}`}
                      >
                        <span className="text-sm text-gray-700">{text}</span>
                      </div>
                    </ArcherElement>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </ArcherContainer>
  );
});

export default AboutUs;
