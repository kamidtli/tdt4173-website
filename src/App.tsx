import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import About from './components/About';
import PredictionForm from './components/PredictionForm/PredictionForm';
import Center from './components/HorizontalCenter';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Center>
              <PredictionForm />
            </Center>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <About />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
