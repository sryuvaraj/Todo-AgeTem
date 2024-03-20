import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import {Button} from 'react-bootstrap'

function FahrenheitToDegree() {
  const [degreeCelcious, setDegreeCelcious] = useState(null);
  const [degreeFahrenheit, setDegreeFahrenheit] = useState("");

  const convertToDegree = () => {
    if (degreeFahrenheit !== "") {
      const fahrenheit = parseFloat(degreeFahrenheit);
      const celcious = (((fahrenheit - 32) * 5) / 9).toFixed(2);
      setDegreeCelcious(celcious);
    } else {
      alert("Please Enter the Fahrenheit Value");
    }
  };

  return (
    <>
      <div>
        <h1>Convert Fahrenheit To Degree</h1>
        <br />
        <p>
          <label>
            <b>Enter Temperature(&deg;F) :</b>
          </label>
          <br />
          <input
            className="form-control"
            type="number"
            value={degreeFahrenheit}
            name="degreeFahrenheit"
            onChange={(e) => setDegreeFahrenheit(e.target.value)}
            placeholder="Enter the temperature in &deg;F"
          />
        </p>
        <button className="btn btn-primary" onClick={convertToDegree}>
          Convert to <span>&deg;C</span>
        </button>
        {degreeCelcious !== null && <h4>Answer : {degreeCelcious} &deg;C</h4>}
      </div>
    </>
  );
}

export default FahrenheitToDegree;
