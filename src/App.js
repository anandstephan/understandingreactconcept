import React from 'react';
import Greet from './Greet'
import Welcome from './Welcome'
import './App.css';
import Counter from './Counter';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './EventBind';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Welcome/>
      <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
