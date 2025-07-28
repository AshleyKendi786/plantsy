 function PlantCard({ plant, onToggleStock }) {
  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button
        className={plant.inStock ? 'in-stock' : 'out-stock'}
        onClick={() => onToggleStock(plant.id)}
      >
        {plant.inStock ? 'In Stock' : 'Out of Stock'}
      </button>
    </div>
  );
}

export default PlantCard;
