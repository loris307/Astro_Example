import React, { useState } from 'react';

function MyReactComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-500 p-4 mb-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-white text-2xl mb-2">React Komponente</h2>
        <button 
          onClick={() => setCount(count + 1)} 
          className="px-4 py-2 bg-white text-black-500 font-bold rounded-lg hover:bg-gray-100 transition"
        >
          Klick mich!
        </button>
      </div>
      <div className="text-white text-6xl font-bold">
        {count}
      </div>
    </div>
  );
}

export default MyReactComponent;


