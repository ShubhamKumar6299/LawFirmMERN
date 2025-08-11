import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error('Error fetching backend:', err));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-500 text-center mt-10">
        {message || 'Loading...'}
      </h1>
    </>
  );
}

export default App;