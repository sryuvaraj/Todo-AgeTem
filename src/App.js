import ToDoHead from "./ToDoComponents/ToDoHead";
import HeadTem from "./Temprature Calulator/HeadTem";
import AgeCalculator from "./AgeCalculatorComponents/AgeCalculaotr";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  

  return (
    <div className="App">
      <div>
        <ol className="bg-dark" style={{display:"flex"}}>
          <li className="m-3" style={{listStyle:"none"}}><button className="btn btn-primary"><Link className="text-white" style={{textDecoration:"none"}} to="/">To Do List</Link></button></li>
          <li className="m-3" style={{listStyle:"none"}}><button className="btn btn-danger"> <Link className="text-white" style={{textDecoration:"none"}} to="/temperatureCaluculator">Degree Convertor</Link></button></li>
          <li className="m-3" style={{listStyle:"none"}}><button className="btn btn-success"><Link className="text-white" style={{textDecoration:"none"}} to="/ageCalculator">Age Calculate</Link></button></li>
        </ol>
      </div>
      <Routes>
        <Route path="/" element={<ToDoHead />}></Route>
        <Route path="/temperatureCaluculator" element={<HeadTem />}></Route>
        <Route path="/ageCalculator" element={<AgeCalculator />}></Route>
      </Routes>
    </div>
  );
}

export default App;
