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
    };

    if (onAddPlant) {
      onAddPlant(newPlant);
    }

    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Add a New Plant</h2>

      <div>
        <label>Plant Name:</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '300px', padding: '5px' }}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Description:</label><br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ width: '300px', height: '80px', padding: '5px' }}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Image URL:</label><br />
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{ width: '300px', padding: '5px' }}
        />
      </div>

      <button
        type="submit"
        style={{
          marginTop: '15px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add Plant
      </button>
    </form>
  );
};

export default PlantForm;
