import Header from 'components/Header';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
