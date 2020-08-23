import React, {useState} from 'react';
import {Button, Input, Col, Layout, Row } from "antd";
// import Button from 'react-bootstrap/Button';
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert"
import Navigation from './Navigation';
// import axios from 'axios';
import './App.css';
import FetchIp from './FetchIp';
// import { responsiveArray } from 'antd/lib/_util/responsiveObserve';
const {Header, Content, Footer } = Layout;
// let http = require('http');
// var addr;
// http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
//   resp.on('data', function(ip) {
//     console.log("My public IP address is: " + ip);
//     addr = ip;
//   });
// });

const App = () => {

  // /// example of using useState which returns a counter [0] and update function [1] (1/3)  /// 
  const [show, setShow] = useState(null);
//   // const [ip, getIP] = useState('0.0.0.0');
// const fetchIp = async () => {
//   let response = await fetch('https://api.ipify.org/?format=json');
//   let data = await response.json();
//   return data;
//     // .then(response => response.json())
//     // .then(data => {
//     //   console.log(data.ip);
//     //   this.setState
//     // })
//   }
//   fetchIp()
//     .then(data => userIp.push(data.ip));



  return (
    <>      
      {/* /// Example of component styling libraries, see navigation.js (1/2) /// */}
      <Layout style={{minHeight: "100vh", width: "100vw"}}>
        <Navigation className="Nav" />
        <Header className="Nav-header">
          <h1>Learning <code>react.js</code>.</h1>
        </Header>
        <Content className="cntr">
          <Row gutter={[0, 24]} className="cntr a">
            <Col span={24} className="a">
              <Row >
                <Col span={12} className="cntr b">
                  <Input className="input" size="small" placeholder='I want to...'/> 
                </Col>
              </Row>
             </Col>
             <Col span={24} className="b">
              <Row>
                <Col span={12} className="cntr c">
                  {/* /// example of using state (2/3)  ///  */}
                  {show && <Button onClick={() => setShow(false)} > Hello </Button>}
                  {/* /// example of using state 3/3 */}
                  <p> Learn React {!show && "later"} </p>
                  {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
                </Col>
              </Row>
             </Col>
             <Col span={24} className="c">
              <Row>
                <Col span={12} className="cntr">
                  <ListGroup>
                    <ListGroup.Item>List Item One</ListGroup.Item>
                    <ListGroup.Item>List Item Two</ListGroup.Item>
                    <ListGroup.Item>List Item Three</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="d">
              <Row>
                <Col span={12} className="cntr">
                  <Button onClick={() => setShow(true)}>Get Your IP</Button>
                  {show && 
                  <Alert variant={"success"}>
                    <FetchIp />
                  </Alert>
                  }                 
                </Col>
              </Row>
            </Col>
          </Row>
          {/* /// Example of using a component styling library, see navigation.js (2/2) /// */}

        </Content>
        <Footer>
          <p>Made by Jason, with the help of some libraries..</p>
        </Footer>
      </Layout>

    </>
  );

}




export default App;





// var http = require('http');

// http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
//   resp.on('data', function(ip) {
//     console.log("My public IP address is: " + ip);
//   });
// });