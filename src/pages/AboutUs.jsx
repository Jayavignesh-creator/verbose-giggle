// components/NextSection.jsx
import React from "react";

const AboutUs = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    className="min-h-screen flex items-center px-6 md:px-20 py-20"
  >
    <div className="max-w-3xl">
      <h2 className="text-7xl font-bold text-gray-900 mb-4">
        Science of Decisions. Art of Impact.
      </h2>
      <p className="text-2xl text-gray-700">
        We build AI solutions — from Analytics to Agentic AI — that turn data
        into decisions, accelerate innovation, and deliver measurable impact
        across industries and operations.
      </p>
    </div>
  </section>
));

export default AboutUs;
