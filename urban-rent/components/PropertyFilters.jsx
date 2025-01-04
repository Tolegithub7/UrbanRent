'use client';
import React, { useState } from 'react';

const PropertyFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Example property data
  const properties = [
    { id: 1, title: 'Condominium 1', type: 'Condominium', location: '6 Killo' },
    { id: 2, title: 'Apartment 1', type: 'Apartment', location: 'Gelan' },
    { id: 3, title: 'Villa 1', type: 'Villa', location: 'Jemo' },
    { id: 4, title: 'Barber Shop 1', type: 'Barber Shop', location: 'Bole' },
    { id: 5, title: 'Office 1', type: 'Office', location: 'Piassa' },
    { id: 6, title: 'Restaurant 1', type: 'Restaurant', location: 'Kazanchis' },
    { id: 7, title: 'Beauty Shop 1', type: 'Beauty Shop', location: 'Lideta' },
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
    <div className="p-6 bg-gray-900 text-white">
      {/* Filters */}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="border rounded-lg bg-gray-800 p-4 shadow-sm">
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
  );
};

export default PropertyFilters;
