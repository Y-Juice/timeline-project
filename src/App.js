import React from 'react';
import Timeline from './components/Timeline';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
      <h1 className="title">Historical Timeline</h1>
      <Timeline events={data} />
    </div>
  );
}

export default App;
