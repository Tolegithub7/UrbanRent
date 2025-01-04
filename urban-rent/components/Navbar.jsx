import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiMenu } from 'react-icons/fi';
import PropertyFilters from './PropertyFilters';

export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center px-6 py-4 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            priority
            quality={100}
            alt="UrbanRent"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3 max-w-lg">
          <FiMenu className="text-gray-500 text-xl mr-2 cursor-pointer" />
          <input
            type="text"
            placeholder="Search home here"
            className="flex-1 bg-transparent outline-none text-gray-700"
          />
          <FiSearch className="text-gray-500 text-xl ml-2 cursor-pointer" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row items-center space-x-6">
          <Link href="/properties">
            <h1 className="text-gray-800 hover:text-purple-600 cursor-pointer">Properties</h1>
          </Link>
          <Link href="/about">
            <h1 className="text-gray-800 hover:text-purple-600 cursor-pointer">About</h1>
          </Link>
          <Link href="/contact">
            <h1 className="text-gray-800 hover:text-purple-600 cursor-pointer">Contact</h1>
          </Link>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            Sign In
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
            Register
          </button>
        </div>
      </nav>
      <PropertyFilters />
    </div>
  );
}
