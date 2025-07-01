import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const ContactUs = React.forwardRef((props, ref) => (
  <>
    {/* Contact Section */}
    <section
      ref={ref}
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 md:px-20 py-20 text-center"
    >
      <h2 className="text-3xl md:text-7xl font-bold text-red-600 mb-6">
        Let’s Shape What’s Next
      </h2>

      <p className="text-2xl text-gray-800 mb-12 max-w-3xl leading-relaxed">
        Looking to power your next move with AI? <br />
        Whether it’s a project, partnership or just a conversation — <br />
        we’re here, and we’re listening.
      </p>

      <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl px-10 py-6 shadow transition duration-300">
        Contact Us
      </button>
    </section>

    {/* Divider */}
    <div className="w-full border-t border-gray-200 my-12 md:my-20" />

    {/* Footer */}
    <footer className="bg-white px-6 md:px-20 pb-10 text-left text-black">
      <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
        {/* Left: Logo & Social */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">QUBERNEU</h2>
          </div>
          <div className="flex gap-6 text-2xl text-gray-800">
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
          <div>
            <h3 className="font-semibold text-red-600 mb-3">Home</h3>
            <ul>
              <div className="space-y-2">
                <li className="font-semibold text-red-600">About</li>
                <li>Culture</li>
                <li>CSR</li>
                <li>Careers</li>
              </div>
            </ul>
            <ul>
              <div className="space-y-2 mt-6">
                <li className="font-semibold text-red-600">Contact Us</li>
                <li>Locations</li>
              </div>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-red-600 mb-3">Services</h3>
            <ul className="space-y-2">
              <li>Analytics & Data Strategy</li>
              <li>AI & Platform Advisory</li>
              <li>Data Engineering</li>
              <li>Data Modernisation</li>
              <li>Data Science & ML</li>
              <li>Agentic & Generative AI</li>
              <li>BI & Dashboards</li>
              <li>MLOps & App Engineering</li>
              <li>AI Auditing Strategy</li>
              <li>AI Governance Audits</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-red-600 mb-3">Insights</h3>
            <ul className="space-y-2">
              <li>Case Studies</li>
              <li>Events</li>
              <li>Blogs</li>
              <li>Infographics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center lg:text-left border-t border-gray-200 pt-6 text-sm text-gray-700">
        © 2025 <span className="font-medium">Quberneu.</span> All Rights
        Reserved.
      </div>
    </footer>
  </>
));

export default ContactUs;
