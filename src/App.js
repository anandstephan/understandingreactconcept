import React, { Fragment } from 'react';
import Greet from './Greet'
import Welcome from './Welcome'
import './App.css';
import Counter from './Counter';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './EventBind';
import ParentComponent from './ParentComponent';
import UserGretting from './UserGretting';
import NameList from './NameList';
import StyleSheet from './StyleSheet'
import Inline from './Inline'
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './Form';
import LifeCycleA from './LifeCycleA';
import FragmentDemo from './FragmentDemo'
import Table from './Table';

function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Welcome/>
      <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGretting/> */}
      {/* <NameList/> */}
      {/* <StyleSheet/> */}
      {/* <Inline/> */}
      {/* <h1 className="error">Error</h1> // Global space stylesheet
      <h2 className={styles.success}>Suceess</h2> // Local scope stylesheet */}
      {/* <Form/> */}
      {/* <LifeCycleA/> */}
      {/* <FragmentDemo/> */}
      <Table/>
    </div>
  );
}

export default App;
