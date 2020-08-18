import React, {useState} from 'react';
// import ReactDOM from "react-dom"
import {Button, Input, Col, Layout, Row } from "antd";
// import Button from 'react-bootstrap/Button';
import ListGroup from "react-bootstrap/ListGroup"
import Navigation from './Navigation'
import './App.css';
const {Header, Content, Footer } = Layout;
const App = () => {
  // /// example of using useState which returns a counter [0] and update function [1] (1/3)  /// 
  const [show, setShow] = useState(true);

  return (
    <>      
      {/* /// Example of component styling libraries, see navigation.js (1/2) /// */}
      <Layout style={{minHeight: "100vh"}}>
        <Navigation className="Nav" />
        <Header className="Nav-header">
          <h1>Learning <code>react.js</code>.</h1>
        </Header>
        <Content className="cntr">
          <Row gutter={[0, 24]} className="cntr">
            <Col span={24}>
              <Row >
                <Col span={12} className="cntr">
                  <Input className="input" size="small" placeholder='I want to...'/> 
                </Col>
              </Row>
             </Col>
             <Col span={24}>
              <Row>
                <Col span={12} className="cntr">
                  {/* /// example of using state (2/3)  ///  */}
                  {show && <Button onClick={() => setShow(false)} > Hello </Button>}
                  {/* /// example of using state 3/3 */}
                  <p> Learn React {!show && "later"} </p>
                  {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
                </Col>
              </Row>
             </Col>
             <Col span={24}>
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
