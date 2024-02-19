import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [uniqueValues, setUniqueValues] = useState([]);

  useEffect(() => {
    // Load your JSON file
    fetch('ProductDetails.json')
      .then(response => response.json())
      .then(data => {
        // Extract unique values from the JSON data
        const unique = [...new Set(data.map(item => item.uniqueKey))];
        setUniqueValues(unique);
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div>
      <h1>Unique Values</h1>
      <ul>
        {uniqueValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
