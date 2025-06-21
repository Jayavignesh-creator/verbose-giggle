import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [parentMenu, setParentMenu] = useState(null);

  const navItems = [
    {
      name: "The Codec Way",
      href: "#",
      subMenu: [
        { name: "Menu 1", href: "#" },
        { name: "Menu 2", href: "#" },
      ],
    },
    {
      name: "Solutions",
      href: "#",
      subMenu: [
        { name: "Menu 3", href: "#" },
        { name: "Menu 4", href: "#" },
      ],
    },
    {
      name: "Technologies",
      href: "#",
      subMenu: [
        { name: "Menu 5", href: "#" },
        { name: "Menu 6", href: "#" },
      ],
    },
    {
      name: "Industries",
      href: "#",
      subMenu: [
        { name: "Menu 7", href: "#" },
        { name: "Menu 8", href: "#" },
      ],
    },
    {
      name: "Client Success",
      href: "#",
      subMenu: [
        { name: "Menu 1", href: "#" },
        { name: "Menu 2", href: "#" },
      ],
    },
    { name: "About", href: "#" },
  ];

  return (
    <div
      className="relative bg-white shadow-md z-50"
      onMouseLeave={() => setParentMenu(null)}
    >
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-6 py-4 h-[70px]">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary-light">Quberneu</div>

        {/* Nav Links */}
        <div className="flex gap-10 text-gray-800 font-medium text-sm">
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
      </div>

      {/* Dropdown Content Area */}
      <div
        className={`w-full overflow-hidden transition-all duration-200 ${
          parentMenu
            ? "min-h-[100px] opacity-100 py-6"
            : "min-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-6">
          {/* Render Submenus only for matched item */}
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
    </div>
  );
};

export default Header;
