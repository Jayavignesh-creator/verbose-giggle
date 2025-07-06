import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CarrerImg from "../assets/teamwork-cuate.png";

const Careers = React.forwardRef((props, ref) => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gray-50 flex items-center px-6 md:px-20 py-20"
    >
      <div className="flex flex-col lg:flex-row w-full gap-12">
        {/* Left Column (empty) */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center items-center">
          <img
            src={CarrerImg}
            alt="About Us Illustration"
            className="w-[600px] h-[600px]"
          />
        </div>

        {/* Right Column with scroll animation */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
          className="lg:w-1/2"
        >
          <h2 className="text-7xl font-bold mb-6">
            <span className="text-black">Build What’s Next,</span>
            <br />
            <span className="text-primary-light">With Us</span>
          </h2>

          <p className="text-gray-700 text-2xl leading-relaxed mb-12">
            Join a team where curiosity meets capability. At the forefront of AI
            innovation, we’re building solutions that shape industries — and
            careers. Whether you're a data scientist, ML engineer, tinkerer, or
            strategist, this is where your impact will be real, and your growth
            exponential.
          </p>

          <p className="text-xl text-black font-normal leading-snug italic">
            "The best journeys, aren’t about the destination — they’re about the
            crew."
          </p>
        </motion.div>
      </div>
    </section>
  );
});

export default Careers;
