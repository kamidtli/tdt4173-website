import React, { useState } from 'react';
import { Button, Spinner, Row } from 'reactstrap';
import CustomDatePicker from './DatePicker';

import { getPredictionFromDate } from '../../queries/predictDate';

export default function PredictionForm() {

  const [date, setDate] = useState(new Date().toISOString());
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const res = await getPredictionFromDate(date);
    setLoading(false);
    console.log(res); // TODO: Do something with response
  }

  if (loading) {
    return <Spinner color="warning" />
  } else {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <CustomDatePicker date={date} setDate={setDate}/>
        <Button color="success" onClick={() => handleClick()}>Predict</Button>
      </div>
    );
  }
}
