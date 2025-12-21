import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AboutMe from './AboutMe';

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Shop", path: "/shop" },
  { name: "About Me", path: "/aboutme" },
  // { name: "testcase", path: "/testcase" },
  { name: "Contact Me", path: "/contactme"}
];



export default function Sidebar({setSidebarOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile */}
      <button

        className=" md:hidden fixed top-4 left-0 z-50 bg-gray-800 text-white p-2 rounded hidden"
      
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-44" : "w-0"
        }  md:w-44 fixed top-0 left-0 h-screen bg-black text-white  flex-col p-4 shadow-lg z-40 transition-all duration-300 overflow-hidden hidden md:flex`}
      >
        <h2 className="text-xl font-bold mb-6 "></h2>
        <Link to="/"><img src='/logopng1.png' className='md:h-15 h-10 w-39 '/></Link>
        <br></br>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // Close on nav click (mobile)
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

      </div>
    </>
  );
}
