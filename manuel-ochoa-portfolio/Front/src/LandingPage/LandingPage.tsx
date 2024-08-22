import React from "react";
import Fireflies from "../components/Fireflies/Fireflies";

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <div className="gradient absolute inset-0"></div>
      <Fireflies />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-4">
          Full Stack <span className="text-red-600">Developer</span>
        </h1>
        <div className="bg-purple-900 py-2 px-6 rounded-full mb-6">
          <p className="text-lg">Nicolás Manuel Ochoa Gomez</p>
        </div>
        <p className="mb-8 max-w-lg">Hola hueles a cola</p>
        <div className="flex space-x-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500">
            Ver
          </button>
          <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">
            Contactame
          </button>
        </div>
      </main>
      <footer className="relative z-10 w-full py-4 bg-gray-800 text-white text-center">
        <p>
          &copy; 2024 Nicolás Manuel Ochoa Gomez. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
