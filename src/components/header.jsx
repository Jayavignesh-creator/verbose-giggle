import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [parentMenu, setParentMenu] = useState(null);

  const navItems = [
    // {
    //   name: "Home",
    //   href: "#",
    // },
    // {
    //   name: "Services",
    //   href: "#",
    //   // subMenu: [
    //   //   { name: "Menu 3", href: "#" },
    //   //   { name: "Menu 4", href: "#" },
    //   // ],
    // },
    // {
    //   name: "Solutions",
    //   href: "#",
    //   // subMenu: [
    //   //   { name: "Menu 5", href: "#" },
    //   //   { name: "Menu 6", href: "#" },
    //   // ],
    // },
    // {
    //   name: "Insights",
    //   href: "#",
    //   // subMenu: [
    //   //   { name: "Menu 7", href: "#" },
    //   //   { name: "Menu 8", href: "#" },
    //   // ],
    // },
    // {
    //   name: "About",
    //   href: "#",
    //   // subMenu: [
    //   //   { name: "Menu 1", href: "#" },
    //   //   { name: "Menu 2", href: "#" },
    //   // ],
    // },
  ];

  return (
    <div
      className="sticky top-0 bg-white shadow-sm z-50"
      onMouseLeave={() => setParentMenu(null)}
    >
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-6 py-4 h-[70px]">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <div className="text-2xl font-bold text-black">QUBERNEU</div>
        </div>

        {/* Nav + Button */}
        <div className="flex items-center gap-10 text-gray-800 font-medium text-sm">
          {/* Nav Links */}
          <div className="flex gap-10">
            {navItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="relative flex items-center gap-1"
                onMouseEnter={() => {
                  if (item.subMenu) {
                    setParentMenu(item.name);
                  } else {
                    setParentMenu(null);
                  }
                }}
              >
                <a
                  href={item.href}
                  className="hover:text-blue-500 transition flex items-center gap-1"
                >
                  {item.name}
                  {item.subMenu && (
                    <FiChevronDown className="text-[10px] mt-[1px]" />
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Us Button */}
          <a
            href="#contact" // Make sure this matches your ContactUs section's ref or ID
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Dropdown Content Area */}
      <div
        className={`absolute left-0 top-[70px] w-full bg-white border-y border-gray-200 z-40 px-6 transition-opacity duration-300 ${
          parentMenu
            ? "opacity-100 pointer-events-auto py-6"
            : "opacity-0 pointer-events-none py-0"
        }`}
      >
        {navItems
          .filter((item) => item.name === parentMenu && item.subMenu)
          .map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex gap-8">
              {item.subMenu.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.href}
                  className="text-gray-800 hover:text-blue-600 text-sm"
                >
                  {sub.name}
                </a>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
