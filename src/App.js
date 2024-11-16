import React from 'react';
import Timeline from './components/Timeline';
import Header from './components/Header';

import data from './data/data.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Timeline events={data} />
    </div>
  );
}

export default App;
