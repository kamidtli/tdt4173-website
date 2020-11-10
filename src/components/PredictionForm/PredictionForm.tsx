import React, { useState } from 'react';
import { Button, Spinner, Media } from 'reactstrap';
import CustomDatePicker from './DatePicker';

import { getPredictionFromDate } from '../../queries/predictDate';

export default function PredictionForm() {

  const [date, setDate] = useState(new Date().toISOString());
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState('');
  const [actual, setActual] = useState('');

  const handleClick = async () => {
    setLoading(true);
    const preprocessedDate = date.split('T');
    const res = await getPredictionFromDate(preprocessedDate[0]);
    setLoading(false);
    if (res) {
      setPrediction(res.predicted_value);
      setActual(res.actual_value);
    }
  }

  const handleNewPrediction = async () => {
    setPrediction('');
  }

  if (loading) {
    return (
      <div className="element-container">
        <Spinner color="warning" />
      </div>
    );
  } else if (prediction !== '') {
    return (
      <div className="element-container">
        <Media>
          <Media body>
            <Media heading>
              {prediction} mm
            </Media>
          Actual rainfall for {date.split('T')[0]}: <strong>{actual}</strong> mm
          </Media>
        </Media>
        <Button color="success" onClick={() => handleNewPrediction()}>New prediction</Button>
      </div>
    );
  } else {
    return (
      <div className="element-container">
        <CustomDatePicker date={date} setDate={setDate}/>
        <br />
        <Button color="success" onClick={() => handleClick()}>Predict</Button>
      </div>
    );
  }
}
