"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuSectionProps } from "@/interfaces/Interfaces";

const MenuSection = ({ title, links }: MenuSectionProps) => {
  const [isMenuOpen] = useState(true);

  return (
    <div>
      <div
        className={`flex justify-between items-center h-14 py-4 px-3 transition-all duration-300 select-none`}
      >
        <h3 className="text-sm font-semibold">{title}</h3>
        <span
          className={`w-4 h-4 transform transition-transform duration-500`}
        ></span>
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
