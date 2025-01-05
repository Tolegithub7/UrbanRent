'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold text-pink-500">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <a href="/about" className="hover:text-white">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">Contact us</a>
            </li>
            <li>
              <a href="/careers" className="hover:text-white">Careers</a>
            </li>
            <li>
              <a href="/culture" className="hover:text-white">Culture</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">Blog</a>
            </li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="text-lg font-semibold text-pink-500">Contacts us</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <a href="mailto:Urban.rent@gmail.com" className="hover:text-white">
                📧 Urban.rent@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:0968015154" className="hover:text-white">
                📞 0968015154
              </a>
            </li>
            <li>
              <span className="hover:text-white">📍 22, golagol bldg</span>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-pink-500">Support</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <a href="/getting-started" className="hover:text-white">Getting started</a>
            </li>
            <li>
              <a href="/help-center" className="hover:text-white">Help center</a>
            </li>
            <li>
              <a href="/server-status" className="hover:text-white">Server status</a>
            </li>
            <li>
              <a href="/report-bug" className="hover:text-white">Report a bug</a>
            </li>
            <li>
              <a href="/chat-support" className="hover:text-white">Chat support</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400">
        <p className="text-sm">© 2024 Urban Rent &nbsp;|&nbsp; Terms &nbsp;|&nbsp; Sitemap &nbsp;|&nbsp; Privacy &nbsp;|&nbsp; Your privacy choices</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://youtube.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
