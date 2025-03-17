import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 border-t-2 shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-lg font-semibold mb-4">
          Celebrating the Art of Sculpture
        </h2>
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Bishwajit Paul. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
