import React from "react";
import { useState } from "react";
import './Carbon.css';

function CarbonCalculator() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const data = {
      value1: value1,
      value2: value2
    };

    fetch('http://127.0.0.1:5000/calculateEmm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseData => {
        // Handle the result from the server
        setResult(responseData.result);
      })
      .catch(error => {
        setError('Error: ' + error);
      });
  };

  return (
    <div>
      <div>
        <label>Value 1:</label>
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <div>
        <label>Value 2:</label>
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Send Request</button>

      {result !== null && (
        <div>
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      )}

      {error !== null && (
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default CarbonCalculator;
