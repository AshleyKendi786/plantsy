 import React, { useState } from 'react';
import PlantForm from './components/PlantForm.jsx';
import PlantCard from './components/PlantCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import './index.css';

function App() {
  const [plants, setPlants] = useState([
    { id: 1, name: "Aloe", image: "https://shorturl.at/pzCXY", price: 15.99, inStock: true },
    { id: 2, name: "ZZ Plant", image: "https://shorturl.at/lrAI2", price: 25.98, inStock: true },
    { id: 3, name: "Pilea peperomioides", image: "https://shorturl.at/mqRX6", price: 5.99, inStock: true },
    { id: 4, name: "Pothos", image: "https://shorturl.at/kmzI7", price: 12.11, inStock: true },
    { id: 5, name: "Jade", image: "https://shorturl.at/flHUY", price: 10.00, inStock: false },
    { id: 6, name: "Monstera Deliciosa", image: "https://shorturl.at/dfwCO", price: 29.99, inStock: true },
    { id: 7, name: "Fiddle Leaf Fig", image: "https://shorturl.at/fgqJW", price: 39.99, inStock: false },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, { ...newPlant, id: plants.length + 1 }]);
  };

  const handleToggleStock = (id) => {
    const updated = plants.map(plant =>
      plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
    );
    setPlants(updated);
  };

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>~Plantsy 🌱~</h1>
      <PlantForm onAddPlant={handleAddPlant} />
      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
      <div className="plant-list">
        {filteredPlants.map(plant => (
          <PlantCard key={plant.id} plant={plant} onToggleStock={handleToggleStock} />
        ))}
      </div>
    </div>
  );
}

export default App;
