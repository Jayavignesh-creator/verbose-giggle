import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutImg from "../assets/leadership-cuate.png"; // 👈 Replace with your actual image path

const AboutUs = React.forwardRef((props, ref) => {
  const textBlockRef = useRef(null);
  const isInView = useInView(textBlockRef, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20"
    >
      {/* Left - Text Block */}
      <motion.div
        ref={textBlockRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
        className="max-w-3xl md:w-1/2"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Science of Decisions.
          <span className="block text-primary-light">Art of Impact</span>
        </h2>
        <p className="text-2xl text-gray-700">
          We build AI solutions — from Analytics to Agentic AI — that turn data
          into decisions, accelerate innovation, and deliver measurable impact
          across industries and operations.
        </p>
      </motion.div>

      {/* Right - Image */}
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center items-center">
        <img
          src={AboutImg}
          alt="About Us Illustration"
          className="w-[700px] h-[700px]"
        />
      </div>
    </section>
  );
});

export default AboutUs;
