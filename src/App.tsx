import React from 'react';
import './App.css';
import { ParentComp } from './components/ParentComp';

function App() {
  return (
    <div className="App">
      App:
      <ParentComp>
        <>
        <h2>My Parent Component</h2>
        <p>hello</p>
        </>
      </ParentComp>
    </div>
  );
}

export default App;
