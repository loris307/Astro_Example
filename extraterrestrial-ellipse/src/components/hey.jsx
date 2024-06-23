import React from 'react';

const Hey = () => {
  const handleClick = () => {
    alert('Button in React wurde geklickt!');
  };

  return (
    <div className='p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-600 space-y-4'>
      <h1 className='text-2xl font-bold text-blue-400'>Hallo von React in Astro!</h1>
      <button className="bg-gray-500 p-2"onClick={handleClick}>Klick mich</button>
    </div>
  );

};

export default Hey;
