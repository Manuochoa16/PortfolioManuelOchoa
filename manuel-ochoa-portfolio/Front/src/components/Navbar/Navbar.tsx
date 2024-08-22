// src/app/Sidebar.tsx
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-full p-5 fixed top-0 z-10">
      <h2 className="text-2xl font-bold mb-3 inline-block mr-10">Menú</h2>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-400">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-400">
            Sobre Nosotros
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
