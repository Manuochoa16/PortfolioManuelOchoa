import React from "react";
import Fireflies from "../components/Fireflies/Fireflies";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
      <Fireflies />
      <header className="w-full py-5 bg-blue-900 text-white text-center fixed top-0 z-10">
        <nav className="flex justify-center space-x-10">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-4">
          Full Stack <span className="text-red-600">Developer</span>
        </h1>
        <div className="bg-purple-900 py-2 px-6 rounded-full mb-6">
          <p className="text-lg">Nicolás Manuel Ochoa Gomez</p>
        </div>
        <p className="mb-8 max-w-lg">
          I am a developer with 3 years of experience in Java and 1 year of
          experience in Angular. I have knowledge of scalable software
          architectures, microservices, and relational databases. You can read
          more in the About Me section. Please feel free to contact me so we can
          work together.
        </p>
        <div className="flex space-x-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500">
            View Resume
          </button>
          <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">
            Contact Me
          </button>
        </div>
      </main>
      <footer className="w-full py-4 bg-gray-800 text-white text-center">
        <p>
          &copy; 2024 Nicolás Manuel Ochoa Gomez. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
