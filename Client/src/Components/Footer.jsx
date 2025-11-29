
  


import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Resume Builder</h2>
          <p className="text-gray-400 text-sm">
            Create beautiful designs, resumes, and web templates with ease.
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Follow us</h3>
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="#" className="hover:text-white"><FaGlobe /></a>
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} DesignWithUs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
