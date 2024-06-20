import React from 'react';
import 'tailwindcss/tailwind.css';

const ContactUs = () => {
  return (
    <div className="antialiase bg-gray-100 flex w-full min-h-screen justify-center items-center mt-12">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">

        {/* Left */}
        <div className="flex flex-col space-y-8 justify-between">
          {/* Left top */}
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
            <p className="pt-2 text-cyan-100 text-lg">
              At Agritech, we are dedicated to revolutionizing the agricultural sector with innovative technology solutions. Our team is here to support you and answer any questions you may have. Feel free to reach out to us!
            </p>
          </div>
          {/* Left middle */}
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <ion-icon name="call" className="text-teal-300 text-xl"></ion-icon>
              <span>+1-800-123-4567</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ion-icon name="mail" className="text-teal-300 text-xl"></ion-icon>
              <span>contact@agritech.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ion-icon name="location" className="text-teal-300 text-xl"></ion-icon>
              <span>123 Agritech Avenue, Farming Town, FT 12345</span>
            </div>
          </div>
          {/* Left bottom */}
          {/* <div className="flex space-x-4">
            <a href="https://www.facebook.com/agritech">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://www.twitter.com/agritech">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/company/agritech">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://www.instagram.com/agritech">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div> */}
        </div>

        {/* Right */}
        <div className="relative">
          {/* circles */}
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
          {/* circles */}
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
            <form className="flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">Your name</label>
                <input type="text" placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">Email Address</label>
                <input type="email" placeholder="Email Address" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea rows="4" placeholder="Message" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"></textarea>
              </div>
              <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Ionicons script */}
      {/* <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> */}
    </div>
  );
};

export default ContactUs;
