"use client";
import { useState } from "react";
import Link from "next/link";
import { IoChevronUpOutline, IoChevronUpSharp } from "react-icons/io5";
import { MenuSectionProps } from "@/interfaces/Interfaces";

const MenuSection = ({ title, links }: MenuSectionProps) => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <div>
      <div
        className={`flex justify-between items-center cursor-pointer h-14 py-4 px-3 transition-all duration-300 select-none ${
          isMenuOpen ? "text-gray-900" : "text-gray-500"
        }`}
        onClick={() => setisMenuOpen((prev) => !prev)}
      >
        <h3 className="text-sm font-semibold">{title}</h3>
        <span
          className={`w-4 h-4 transform transition-transform duration-500 ${
            isMenuOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isMenuOpen ? <IoChevronUpSharp /> : <IoChevronUpOutline />}
        </span>
      </div>

      <ul
        className={`bg-zinc-100 text-gray-500 text-sm font-semibold overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-48 opacity-100 mb-2" : "max-h-0 opacity-0"
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block h-14 py-4 pl-4 hover:text-gray-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
