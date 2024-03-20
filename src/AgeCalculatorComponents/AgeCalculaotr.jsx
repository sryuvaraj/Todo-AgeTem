import React, { useState } from "react";

const AgeCalculaotr = () => {
  const [date, setDate] = useState(null);

  const selectDate = new Date(date);
  const currentDate = new Date();
  const [years, setYears] = useState(null);
  const [months, setMonths] = useState(null);
  const [days, setDays] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    setYears(currentDate.getFullYear() - selectDate.getFullYear());
    setMonths(currentDate.getMonth() - selectDate.getMonth());
    setDays(currentDate.getDate() - selectDate.getDate());
  };

  return (
    <>
    <div>
        <div className="p-2">
        <div className="content d-flex justify-content-center">
        <div className="inputs my-4 p-4" style={{ width: "100vh",border:"2px solid black" }}>
            <h3 className="text-center"><u>Age Calculator</u></h3>
          <form className="mt-5" onSubmit={calculate}>
            <label><h4>Select Date:</h4></label>
            <input
              className="form-control"
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-dark my-4">
              Calculate
            </button>
          </form>
        </div>
      </div>
      <div className="result d-flex justify-content-center">
        <div style={{ width: "100vh",display:"flex",justifyContent:"space-around",border:"2px solid black"}}>
          <div className="box">
            <h4 id="years">{years}<small> Years</small></h4>
          </div>
          <div className="box">
            <h4 id="months">{months}<small> Months</small></h4>
          </div>
          <div className="box">
            <h4 id="days">{days}<small> Days</small></h4>
          </div>
        </div>
      </div>
        </div>
    </div>
    </>
  );
};

export default AgeCalculaotr;
