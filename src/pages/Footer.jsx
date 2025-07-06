import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="min-h-1/2 bg-gray-50 px-6 md:px-20 pt-20 pb-10 text-black"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12 mb-6">
        {/* Socials Section - Left */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 text-2xl text-gray-800 opacity-20">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* QUBERNEU on top-right */}
        <div className="text-right">
          <h2 className="text-2xl font-bold text-gray-800">QUBERNEU</h2>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-gray-200 pt-6 text-sm text-gray-700 text-center lg:text-left">
        © 2025 <span className="font-medium">Quberneu.</span> All Rights
        Reserved.
      </div>
    </footer>
  );
});

export default Footer;
