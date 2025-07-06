// ContactUs.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactUs = React.forwardRef((props, ref) => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 md:px-20 py-20 text-center"
    >
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
      >
        <h2 className="text-3xl md:text-7xl font-bold mb-6">
          <span className="text-black">Let’s Shape </span>
          <span className="text-primary-light">What’s Next</span>
        </h2>

        <p className="text-2xl text-gray-800 mb-12 max-w-3xl leading-relaxed">
          Looking to power your next move with AI? <br />
          Whether it’s a project, partnership or just a conversation — <br />
          we’re here, and we’re listening.
        </p>

        <button className="bg-primary-light hover:bg-primary-light text-white font-bold text-lg md:text-xl px-10 py-6 shadow transition duration-300">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
});

export default ContactUs;
