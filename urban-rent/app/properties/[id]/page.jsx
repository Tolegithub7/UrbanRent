export default function PropertyDetailsPage({ params }) {
    const { id } = params;
  
    return (
      <div>
        <h1>Property Details - {id}</h1>
        <p>Detailed information about the selected property.</p>
      </div>
    );
  }
  