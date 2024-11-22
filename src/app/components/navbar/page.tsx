"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownBlur = (event: React.FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropdownOpen(false);
    }
  };

  return (
    <nav className="flex justify-between items-center bg-black p-4">
      <Link href="/" className="font-semibold text-2xl text-white">
      DriveLine
      </Link>
      
      <div className="flex items-center">
      <Link href="/components/about" className="px-4 text-white">About</Link>
        <div className="relative" onBlur={handleDropdownBlur}>
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none px-4"
          >
            Services
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <Link href="/components/corolla" className="block px-4 py-2 text-black hover:bg-slate-200">Toyota Corolla</Link>
              <Link href="/components/hondaCity" className="block px-4 py-2 text-black hover:bg-slate-200">Honda City</Link>
              <Link href="/components/suzuki" className="block px-4 py-2 text-black hover:bg-slate-200">Suzuki Alto</Link>
              <Link href="/components/fortuner" className="block px-4 py-2 text-black hover:bg-slate-200">Toyota Fortuner</Link>
            </div>
          )}
        </div>
        <Link href="/components/contact" className="px-4 text-white">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;