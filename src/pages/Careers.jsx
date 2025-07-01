import React from "react";

const Careers = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    className="min-h-screen bg-white flex items-center px-6 md:px-20 py-20"
  >
    <div className="flex flex-col lg:flex-row w-full gap-12">
      {/* Left Column (empty) */}
      <div className="lg:w-1/2 hidden lg:block"></div>

      {/* Right Column */}
      <div className="lg:w-1/2">
        <h2 className="text-7xl font-bold text-red-600 mb-6">
          Build What’s Next, With Us
        </h2>

        <p className="text-gray-700 text-2xl leading-relaxed mb-12">
          Join a team where curiosity meets capability. At the forefront of AI
          innovation, we’re building solutions that shape industries — and
          careers. Whether you're a data scientist, ML engineer, tinkerer, or
          strategist, this is where your impact will be real, and your growth
          exponential.
        </p>

        <p className="text-xl text-black font-normal leading-snug italic">
          "The best journeys, <br />
          aren’t about the destination — they’re about <br />
          the crew."
        </p>
      </div>
    </div>
  </section>
));

export default Careers;
