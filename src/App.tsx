import React from 'react';
import { Home } from './components/Home'
import './App.css';
import {Apresentação} from './components/Apresentação/index'

function App() {  
  return (
    <div className="App">
      <header className="App-header">  
        <Home />
        <Apresentação />
      </header>
    </div>
  );
}

export default App;
