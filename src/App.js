import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [numberId, setNumberId] = useState('');
  const [response, setResponse] = useState(null);

  const fetchAverage = async () => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${numberId}`);
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <input
        type="text"
        value={numberId}
        onChange={(e) => setNumberId(e.target.value)}
        placeholder="Enter number ID (e.g., p, f, e, r)"
      />
      <button onClick={fetchAverage}>Fetch Average</button>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>
            Window Previous State: {JSON.stringify(response.windowPrevState)}
            Window Current State: {JSON.stringify(response.windowCurrentState)}
            Numbers: {JSON.stringify(response.number)}
            Average: {response.avg}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;


