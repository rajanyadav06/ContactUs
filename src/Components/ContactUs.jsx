import React from "react";
import MapComponent from "./MapComponent.jsx";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="bg-gradient-to-br from-gray-800 via-blue-700 to-gray-900 md:col-span-5 p-10 text-white flex flex-col justify-center over">
          <h3 className="text-4xl font-bold mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h3>
          <p className="text-gray-200 mb-6">
            Feel free to reach out to us for any queries or support.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-2 text-lg">
              <span className="font-semibold">📍 Address:</span>91Springboard
              Sector 1, Noida
            </p>
            <p className="flex items-center gap-2 text-lg">
              <span className="font-semibold">📞 Phone:</span> +91 6668766769
            </p>
            <p className="flex items-center gap-2 text-lg">
              <span className="font-semibold">⏳ Availability:</span> 24/7
            </p>
          </div>
          <div className="mt-2"></div>
          <div className="flex gap-10 mt-6 p-4 rounded-lg text-white">
            <a className=" text-3xl" href="https://facebook.com">
            <FaFacebook />
            </a>
            <a className=" text-3xl" href="https://twitter.com">
            <FaXTwitter />

            </a>
            <a className=" text-3xl" href="https://instagram.com">
            <FaInstagram />

            </a>
            <a className=" text-3xl" href="https://linkedin.com">
            <FaLinkedin />

            </a>
          </div>
        </div>

        {/* Right Section */}
        <form
          action="https://fabform.io/f/{form-id}"
          method="post"
          className="md:col-span-7 p-10 bg-blue-50"
        >
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div >
              <label className="block  text-gray-700 font-semibold">
                First Name
              </label>
              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="text"
                placeholder="Jane"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Last Name
              </label>
              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">
              Phone Number
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="tel"
              placeholder="Enter a number"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">
              Your Message
            </label>
            <textarea
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-gray-700">
              <input className="mr-2" type="checkbox" /> Subscribe to newsletter
            </label>
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-all">
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-10">
        <MapComponent />
        </div>
    </div>
  );
};

export default Contact;
