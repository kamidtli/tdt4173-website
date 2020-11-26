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
          When you choose a date, a trained AI model uses information from the previous day to predict the total precipitation for the chosen date. For example, if we predict for 11/24/2020, the model uses measurements from 11/23/2020 to predict the precipitation. This is why you cannot predict precipitation for future dates, since there is no preceeding measurements. There is also no actual value if you pick today, since this is still being measured.
          <div className="spacer" />
          When you click predict, a request is sent to a <a href="https://cloud.google.com/functions">Google Cloud Function</a>. This then fetches the required measurements from an API provided by <a href="https://www.met.no/">The Norwegian Meteorological Institute (MET)</a>, before feeding this measurement to the trained AI model hosted in <a href="https://aihub.cloud.google.com/u/0/">Google AI Hub</a>. The precipitation is then predicted and returned to your screen.
          <div className="spacer" />
          <Media>
            <Media body>
              <Media heading>
                About
              </Media>
              This is a website created to showcase a project for the course TDT4173 Machine Learning at NTNU, Trondheim. A set of machine learning models were created to explore the possibilities of using AI to predict the downfall for a specific area. This model predicts precipitation at the weather station located at Voll in Trondheim.
            </Media>
          </Media>
        </Media>
      </Media>
    </div>
  )
}