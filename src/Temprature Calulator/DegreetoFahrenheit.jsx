import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
//import {Button} from 'react-bootstrap'

function DegreeToFahrenheit(){
    const [degreeCencious, setDegreeCencious] = useState(null)
    const [degreeFahrenheit, setDegreeFahrenheit] = useState(null)

    const convertToFahernheit = ()=>{
        if(degreeCencious !== null){
            const celcious = parseFloat(degreeCencious)
            const fahrenfeit = ((celcious * 9/5) + 32).toFixed(2)
            setDegreeFahrenheit(fahrenfeit)
        }
        else{
            alert("Please Enter the Celcious value")
        }
    }

    const inputBoxStyles = {
        background:"transparent",
        fontSize:"15px",
        border:"none",
        borderBottom:"2px solid gray",
        outline:"none",
        color:"white",
        width: "100%"
    }
    return(
        <>
        <div>
            <h1>Convert Degree To Fahrenheit</h1>
            <br/>
            <p>
                <label>Enter Temperature(&deg;C) :</label><br/>
                <input className='form-control' id='celInput' type="number" onChange={(e)=>setDegreeCencious(e.target.value)} placeholder="Enter the temperature in &deg;C"/>
            </p>
            <button className='btn btn-primary' onClick={convertToFahernheit}>Convert to <span>&deg;F</span></button>
            {(degreeFahrenheit !== null) && <h4>Answer : {degreeFahrenheit} &deg;F</h4>}
        </div>
        </>
    )
}

export default DegreeToFahrenheit