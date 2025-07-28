 import React, { useEffect, useState } from 'react';
import PlantForm from './components/PlantForm';
import PlantCard from './components/PlantCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/plants')
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const handleToggleStock = (id) => {
    const updated = plants.map((plant) =>
      plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
    );
    setPlants(updated);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Plantsy 🌿</h1>
      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
      <PlantForm onAddPlant={handleAddPlant} />
      <div className="plant-list">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onToggleStock={handleToggleStock}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
