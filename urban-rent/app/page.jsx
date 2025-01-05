"use client";
import Image from 'next/image';
import { useState } from 'react';
export default function HomePage() {

    const [activeFilter, setActiveFilter] = useState('All');
  
    // Example property data
    const properties = [
      { id: 1, title: 'Condominium', type: 'Condominium', location: '6 Killo', image: '/images/cod1.png' },
      { id: 2, title: 'Apartment', type: 'Apartment', location: 'Gelan', image: '/images/cod2.png' },
      { id: 3, title: 'Villa', type: 'Villa', location: 'Jemo', image: '/images/cod3.png' },
      { id: 4, title: 'Barber Shop', type: 'Barber Shop', location: 'Bole', image: '/images/cod4.png' },
      { id: 5, title: 'Office', type: 'Office', location: 'Piassa', image: '/images/cod5.png' },
      { id: 6, title: 'Restaurant', type: 'Restaurant', location: 'Kazanchis', image: '/images/cod6.png' },
      { id: 7, title: 'Beauty Shop', type: 'Beauty Shop', location: 'Lideta', image: '/images/cod7.png' },
      { id: 8, title: 'Apartment', type: 'Apartment', location: 'Garment', image: '/images/cod8.png' },
      { id: 9, title: 'Condominium', type: 'Condominium', location: 'Adisu Gebeya', image: '/images/cod9.png' },
      { id: 10, title: 'Barber Shop', type: 'Barber Shop', location: 'Mekanisa', image: '/images/cod10.png' },
      { id: 11, title: 'Restaurant', type: 'Restaurant', location: 'Bole Arabsa', image: '/images/cod11.png' },
      { id: 12, title: 'Office', type: 'Office', location: 'Alem Tena', image: '/images/cod12.png' },
      { id: 13, title: 'Villa', type: 'Villa', location: 'Asko', image: '/images/cod13.png' },
      { id: 14, title: 'Condominium', type: 'Condominium', location: 'Autobus Tera', image: '/images/cod14.png' },
      { id: 15, title: 'Condominium', type: 'Condominium', location: 'Shiro Meda', image: '/images/cod15.png' },
    ];
  
    // Categories for filtering
    const categories = [
      'Condominium',
      'Apartment',
      'Villa',
      'Barber Shop',
      'Office',
      'Restaurant',
      'Beauty Shop',
    ];
  
    // Filtered properties based on the active filter
    const filteredProperties =
      activeFilter === 'All'
        ? properties
        : properties.filter((property) => property.type === activeFilter);
  

  return (
    <div>
      {/* <div className="grid grid-cols-2 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div> */}
      <div className="p-6 bg-gray-900 text-white">
            <div className="flex items-center space-x-6 overflow-x-auto mb-6">
              {['All', ...categories].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`flex flex-col items-center text-sm font-medium px-4 py-2 ${
                    activeFilter === category ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                  } rounded-lg transition`}>
                  <span>{category}</span>
                </button>
              ))}
              <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-800">
                <span className="mr-2">⚙</span>
                Filters
              </button>
            </div>
      
            {/* Property List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <div key={property.id} className="border rounded-lg bg-gray-800 p-4 shadow-sm items-center justify-center">
                   <Image
                      src={property.image}
                      alt={property.title}
                      width={500}
                      height={500} />
                    <h2 className="text-lg font-semibold">{property.title}</h2>
                    <p className="text-gray-400 text-sm">{property.location}</p>
                    <p className="text-gray-400 text-sm">{property.type}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No properties found.</p>
              )}
            </div>
          </div>
    </div>
  );
}
