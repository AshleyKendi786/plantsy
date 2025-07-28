 import React, { useState } from 'react';

const PlantForm = ({ onAddPlant }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlant = {
      id: Date.now(),
      name,
      description,
      image,
      price: 0,       
      inStock: true   
    };

    if (onAddPlant) {
      onAddPlant(newPlant);
    }

    
    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add a New Plant</h2>

      <label>
        Name:
        <input
          type="text"
          placeholder="e.g. Aloe Vera"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Description:
        <textarea
          placeholder="Short plant description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>

      <label>
        Image URL:
        <input
          type="url"
          placeholder="https://..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </label>

      <button type="submit">Add Plant</button>
    </form>
  );
};

export default PlantForm;
