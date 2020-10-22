import React from 'react';
import { Media } from 'reactstrap';
import { BsInfoCircle } from 'react-icons/bs';

export default function About() {
  return (
    <Media>
      <Media left className="pr-3">
        <BsInfoCircle size={24}/>
      </Media>
      <Media body>
        <Media heading>
          About
        </Media>
        This is a website created to showcase a project for the course TDT4173 Machine Learning at NTNU, Trondheim.
      </Media>
    </Media>
  )
}