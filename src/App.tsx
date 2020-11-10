import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import PredictionForm from './components/PredictionForm/PredictionForm';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Container>
        <div className="spacer-large" />
        <PredictionForm />
        <div className="spacer-large" />
        <About />
      </Container>
    </div>
  );
}

export default App;
