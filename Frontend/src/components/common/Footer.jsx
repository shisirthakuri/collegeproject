import { Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section className="pt-10 pb-7 border-t-2 border-gray-300 mt-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        
        {/* Top Info Section: Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 text-center pb-14 border-b border-gray-200">
            <div>
              <h6 className="text-lg font-medium text-gray-900 mb-4">Address</h6>
              <p className="text-base text-gray-600">Kumakh Gaupalika Ward No.2 Salyan</p>
            </div>
            <div>
              <h6 className="text-lg font-medium text-gray-900 mb-4">Contact</h6>
              <p className="text-base text-gray-600 whitespace-nowrap">+977 98783747384</p>
              <p className="text-base text-gray-600 whitespace-nowrap">support@Narayanmavi School</p>
            </div>

            <div>
              <h6 className="text-lg font-medium text-gray-900 mb-4">Office</h6>
              <p className="text-base text-gray-600">Monday - Friday</p>
              <p className="text-base text-gray-600">9AM - 7PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center gap-4 pt-7">
          <p className="text-sm text-gray-400">© NarayanMavi 2023, All rights reserved.</p>

          <ul className="flex items-center gap-6">
            <li><a href="#" className="text-gray-500 text-sm transition hover:text-indigo-600">Terms</a></li>
            <li><a href="#" className="text-gray-500 text-sm transition hover:text-indigo-600">Privacy</a></li>
            <li><a href="#" className="text-gray-500 text-sm transition hover:text-indigo-600">Cookies</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center relative border border-gray-300 rounded-full bg-gray-500 shadow-sm group overflow-hidden transition">
              <Youtube className="text-white z-10" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-red-500 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>

            <button className="w-9 h-9 flex items-center justify-center relative border border-gray-300 rounded-full bg-white shadow-sm group overflow-hidden transition">
              <svg
                className="fill-black z-10 transition group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="20" height="20"
                viewBox="0 0 72 72"
                fill="none"
              >
                <path d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z" />
              </svg>
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-black z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>

            <button className="w-9 h-9 flex items-center justify-center relative border border-gray-300 rounded-full bg-white shadow-sm group overflow-hidden transition">
              <svg
                className="fill-gray-900 z-10 transition group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="20" height="20"
                viewBox="0 0 72 72"
                fill="none"
              >
                <path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" />
              </svg>
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
