import { FaLinkedin, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      {/* Main Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Dr. Sanjay Gambhir</h3>
          <p className="text-gray-400">
            Nuclear Medicine Expert & Academic Leader
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-300"
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Me Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <FaResearchgate size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <SiGooglescholar size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-sm text-gray-400">
          © 2025 Dr. Sanjay Gambhir. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
