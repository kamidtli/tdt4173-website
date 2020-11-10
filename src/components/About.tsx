import React from 'react';
import { Media } from 'reactstrap';
import { BsInfoCircle } from 'react-icons/bs';

export default function About() {
  return (
    <div>
      <Media>
        <Media left className="pr-3">
          <BsInfoCircle size={24}/>
        </Media>
        <Media body>
          <Media heading>
            How it works
          </Media>
          When you choose a date, a trained AI uses information from the previous dates to predict the rainfall for the chosen date. 
          <div className="spacer" />
          <Media>
            <Media body>
              <Media heading>
                About
              </Media>
              This is a website created to showcase a project for the course TDT4173 Machine Learning at NTNU, Trondheim.
            </Media>
          </Media>
        </Media>
      </Media>
    </div>
  )
}