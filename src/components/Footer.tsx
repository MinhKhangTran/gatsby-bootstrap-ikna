import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-700 text-center text-white py-4">
      &copy; {new Date().getFullYear()} Ikna. All Rights Reserved
    </footer>
  );
};

export default Footer;
