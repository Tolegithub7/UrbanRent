const PropertyCard = ({ title, location, price, rating, image }) => {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <div className="card-details">
          <h3>{title}</h3>
          <p>{location}</p>
          <p>{price}</p>
          <p>⭐ {rating}</p>
        </div>
        <style jsx>{`
          .card {
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            transition: transform 0.2s;
          }
          .card:hover {
            transform: scale(1.02);
          }
          .card img {
            width: 100%;
            height: auto;
          }
          .card-details {
            padding: 1rem;
          }
          .card-details h3 {
            margin: 0.5rem 0;
          }
        `}</style>
      </div>
    );
  };
  
  export default PropertyCard;
  