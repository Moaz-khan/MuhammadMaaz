"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on click
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* 🔹 Logo */}
          <Link href="/">
            <Image
              src="/images/LOGO.png"
              alt="Muhammadmaaz"
              width={220}
              height={67}
              className="w-[180px] md:w-[220px] lg:w-[250px] cursor-pointer"
            />
          </Link>

          {/* 🔹 Mobile Menu Button */}
          <button
            className="md:hidden text-orange-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 size={30} /> : <VscThreeBars size={30} />}
          </button>

          {/* 🔹 Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "AboutMe", "Projects", "Skills", "Contact"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`/#${item.toLowerCase()}`}
                  className="font-medium text-gray-700 transition hover:text-orange-600 hover:underline underline-offset-4">
                  {item}
                </Link>
              ),
            )}
            <a
              href="/CV.pdf"
              download
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium transition hover:bg-orange-400 duration-300 shadow-md">
              Download CV
            </a>
          </div>
        </div>

        {/* 🔹 Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-white transition-transform duration-300 z-40 flex flex-col items-center justify-center space-y-6">
            {["Home", "AboutMe", "Projects", "Skills", "Contact"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`/#${item.toLowerCase()}`}
                  onClick={closeMenu} // ✅ Auto-close on click
                  className="text-xl font-semibold text-gray-800 transition hover:text-orange-600">
                  {item}
                </Link>
              ),
            )}
            <a
              href="/CV.pdf"
              download
              onClick={closeMenu} // ✅ Auto-close on CV download
              className="bg-orange-500 text-white text-lg px-8 py-3 rounded-lg font-medium transition hover:bg-orange-400 shadow-lg">
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
