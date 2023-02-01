import React from 'react';

function App() {
  const hello: string = 'Weather App';
  return (
    <div className="relative overflow-hidden flex justify-center items-center snap-x snap-mandatory min-h-screen">
      <div className="container bg-blue-500 w-64 h-80 rounded-lg shadow-xl snap-always">
        <h1>{hello}</h1>
      </div>
      <div className="container bg-blue-500 w-80 h-96 rounded-lg shadow-xl mx-8 snap-always">
        <h1>{hello}</h1>
      </div>
      <div className="container bg-blue-500 w-64 h-80 rounded-lg shadow-xl snap-always">
        <h1>{hello}</h1>
      </div>
    </div>
  );
}

export default App;
