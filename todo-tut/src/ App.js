import React, {useState} from 'react';
// import ReactDOM from "react-dom"
import {Button, Input, Col } from "antd";
// import Button from 'react-bootstrap/Button';
import Navigation from './Navigation'
import './App.css';

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Navigation />
      <header className="Nav-header">
       {show && <Button onClick={() => setShow(false)} > Hello </Button>}
       <Col span={6} >
        <Input className="input" size="small" placeholder='I want to...'/>
       </Col>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p> Learn React {!show && "later"} </p>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </header>


      {  console.log(show)}

    </>
  );

}




export default App;
