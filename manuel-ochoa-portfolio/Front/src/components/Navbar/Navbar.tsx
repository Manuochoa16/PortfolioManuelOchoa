// src/app/Sidebar.tsx
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className=" text-white w-full p-5 fixed top-0 z-10">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-400">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-400">
            Sobre Mi
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-blue-400">
            Servicios
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-400">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
