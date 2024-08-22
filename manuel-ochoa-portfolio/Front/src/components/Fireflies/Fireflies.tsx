import React from "react";
import "./Fireflies.scss";

const Fireflies: React.FC = () => {
  const quantity = 50;
  const fireflies = Array.from({ length: quantity }, (_, i) => (
    <div key={i} className="firefly"></div>
  ));

  return <>{fireflies}</>;
};

export default Fireflies;
