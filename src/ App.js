import React, {useState} from 'react';
import {Button, Input, Col, Layout, Row } from "antd";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert"
import Navigation from './Navigation';
import './App.css';
import FetchIp from './FetchIp';
const {Header, Content, Footer } = Layout;

const App = () => {
  const [show, setShow] = useState(null);

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
