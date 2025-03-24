import React from "react";
import { FaLinkedin, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";
const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-8 px-6 md:px-20">
      <div className="conatainer mx-auto md:p-8 p-4">
        <h1 className="text-4xl font-bold text-start mb-12">
          Contact Information
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your FullName"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="blaock text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="messaege"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  rows="6"
                  required
                  className="w-full border p-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <ul className="space-y-4 text-gray-700 font-medium">
              <li className="flex items-center space-x-3">
                <MdEmail className="text-2xl" />
                <span>professional@email.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaLinkedin className="text-2xl text-blue-600" />
                <span>LinkedIn Profile</span>
              </li>
              <li className="flex items-center space-x-3 ">
                <FaResearchgate className="text-2xl text-green-600" />
                <span>ResearchGate Profile</span>
              </li>
              <li className="flex items-center space-x-3">
                <SiGooglescholar className="text-2xl text-gray-700" />
                <span>Google Scholar Profile</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
