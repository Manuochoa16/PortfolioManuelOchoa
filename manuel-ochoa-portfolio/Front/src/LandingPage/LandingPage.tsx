import React from "react";
import Fireflies from "../components/Fireflies/Fireflies";
import Image from "next/image";

const LandingPage: React.FC = () => {
  return (
    <div className="grid grid-rows-[1fr_auto] relative text-white">
      <div className="gradient absolute inset-0 z-0"></div>
      <Fireflies />

      <main className="flex flex-col lg:flex-row items-center justify-center relative z-10 w-full lg:w-4/5 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full text-center">
          {/* Contenedor para el contenido a la izquierda */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center lg:items-center lg:text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-2 lg:mb-4">
              Full Stack <span className="text-red-600">Developer</span>
            </h1>
            <div className="bg-purple-900 py-2 px-6 rounded-full mb-4 lg:mb-6">
              <p className="text-lg">Nicolás Manuel Ochoa Gomez</p>
            </div>
            <p className="mb-6 lg:mb-8 max-w-lg">Hola hueles a cola</p>
            <div className="flex space-x-4 justify-center">
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500">
                Ver
              </button>
              <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">
                Contactame
              </button>
            </div>
          </div>

          {/* Contenedor para la imagen a la derecha */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <Image
              src="/yo ponele sin fondo.png"
              alt="Nicolás Manuel Ochoa Gomez"
              width={600}
              height={600}
              className="rounded-full"
            />
          </div>
        </div>
      </main>

      <footer className="relative z-10 w-full text-white text-center mt-24">
        <p>
          &copy; 2024 Nicolás Manuel Ochoa Gomez. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
