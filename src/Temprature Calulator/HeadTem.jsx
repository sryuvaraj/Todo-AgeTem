import React from "react";
import DegreeToFahrenheit from "./DegreetoFahrenheit";
import FahrenheitToDegree from "./FahrenheitToDegree";

const HeadTem = () => {
  return (
    <>
      <div  className="d-flex justify-content-center m-5">
        <div style={{display:"flex"}}>
          <div className="px-5" style={{borderRight:"2px solid gray"}}><FahrenheitToDegree /></div>
          <hr></hr>
          <div className="px-5"><DegreeToFahrenheit /></div>
        </div>
      </div>
    </>
  );
};

export default HeadTem;
