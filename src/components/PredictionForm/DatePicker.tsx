import React, { Dispatch, SetStateAction, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  date: string;
  setDate: (date: string) => void;
}

export default function CustomDatePicker(props: Props) {
  const handleChange = (date: null | Date | [Date, Date]) => {
    if (date instanceof Date) {
      props.setDate(date.toISOString());
    }
  }

  return (
    <DatePicker className="datepicker" selected={new Date(props.date)} onChange={date => handleChange(date)} />
  )
}