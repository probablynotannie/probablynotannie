import React from "react";

function Particulos() {
  return (
    <div>
      <div className="particle-container" id="particleContainer"></div>
      <div className="floating-orb w-96 h-96 bg-gradient-to-r from-purple-400 to-indigo-400 top-10 -left-48 opacity-20"></div>
      <div className="floating-orb w-28 h-28 bg-gradient-to-r from-blue-400 to-cyan-400 top-10 right-1/3 opacity-20"></div>
      <div className="floating-orb w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 top-96 -right-60 opacity-20 animation-delay: -4s"></div>
      <div className="floating-orb w-64 h-64 bg-gradient-to-r from-green-400 to-blue-400 bottom-20 left-1/2 opacity-20 animation-delay: -2s;"></div>
      <div className="floating-orb w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 top-80 left-72 opacity-20 animation-delay: -5s;"></div>
    </div>
  );
}

export default Particulos;
