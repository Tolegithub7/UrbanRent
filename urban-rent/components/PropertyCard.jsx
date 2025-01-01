export default function PropertyCard({ property }) {
  const { title, location, price, rating, image } = property;

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{price}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}
