'use client'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import MainCrousel from '../../component/MainHome/maincrousel'
import Link from 'next/link'

export default function HomeBackground() {
  return (
    <div className="relative isolate bg-white flex justify-center items-center h-screen lg:h-[80vh]">
      {/* Background Gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5cabf5] to-[#3a2df5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 text-center lg:text-left">
        <div className="lg:flex-1 mx-4 lg:mx-0 lg:pr-8">
          <p className="font-bold text-blue-600 animate-fadeIn">RPL Certification in Australia</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 animate-fadeIn">Are you Facing</h1>
          <p className="text-3xl md:text-4xl lg:text-5xl text-blue-600 font-bold mb-2 animate-fadeIn overflow-hidden whitespace-nowrap">
            No Further Stay!
          </p>
          <p className="text-lg md:text-xl font-bold mb-2 animate-fadeIn overflow-hidden whitespace-nowrap pr-5">
            Condition on Your Current Visa Status
          </p>
          <p className="text-white mb-4 max-w-xl mx-auto lg:mx-0 animate-fadeIn">
            We can solve your visa-related issue, whether it's a new visa or permanent residence application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 m-4 justify-center lg:justify-start">
            <button className="bg-blue-600 border-2 p-2 hover:bg-white hover:text-black hover:border-blue-600 font-bold text-white rounded animate-bounce">
              Contact Us for Visa!
            </button>
            <button className="border-2 bg-white p-2 font-bold rounded hover:bg-blue-600 hover:text-white border-blue-600 animate-bounce">
              Book Appointment
            </button>
          </div>
          <div className="mt-6 mb-4 text-blue-900 flex gap-4 justify-center lg:justify-start">
            <Link className="hover:text-white animate-pulse" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={25} />
            </Link>
            <Link className="hover:text-white animate-pulse" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </Link>
            <Link className="hover:text-white animate-pulse" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} />
            </Link>
            <Link className="hover:text-white animate-pulse" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} />
            </Link>
          </div>
        </div>
        <div className="relative flex-shrink-0 rounded-full overflow-hidden bg-blue-200 border-4 border-white">
          <div>
            <MainCrousel />
          </div>
        </div>
      </div>
    </div>
  )
}
