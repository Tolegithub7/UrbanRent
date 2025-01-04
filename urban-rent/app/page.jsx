import PropertyCard from '../components/PropertyCard';
import FilterBar from '../components/FilterBar';

export default function HomePage() {
  const properties = [
    {
      id: 1,
      title: 'Studio Condominium',
      location: '6 Kilo',
      price: '15,000 Birr',
      rating: 4.96,
      image: '/images/logo.png',
    },
    {
      id: 2,
      title: '1-Bedroom Condominium',
      location: 'Gelan',
      price: '22,000 Birr',
      rating: 4.91,
      image: '/images/logo.png',
    },
  ];

  return (
    <div>
      <FilterBar />
      <div className="grid grid-cols-2 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
