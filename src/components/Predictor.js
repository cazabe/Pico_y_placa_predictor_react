import React, {useState,useEffect} from "react";



const Predictor = () => {
    const[plateNumber , setplateNumber] = useState("");
    const[date , setDate] = useState("")
    const[hour , setHour] = useState("")
    const[callToRender , setcallToRender] = useState(false);


    const handleSubmit = (event)=>{
        event.preventDefault();
        plateLastDigit();
        extracDay();
        setHour(hour);
        setcallToRender(true);
    }

    const plateLastDigit = ()=>{
     let fullPlate = plateNumber.split("");
     let lastDigit = fullPlate.pop();
     return setplateNumber(lastDigit);
    }
    
    const extracDay = ()=>{
        let dt = new Date(date);
        let day = dt.getDay();
        return setDate(day);
        
    }
    console.log("numero de matricula:" , plateNumber , " fecha" , date , " hour ", hour);

    const conditionalResponse = ()=>{
      console.log("Dentro de la funcion conditionalResponse: ", plateNumber, " ", date, "",hour);
      if(hour === "7:00" || hour === "9:30" || hour === "16:00" || hour === "19:30" ){
        if(plateNumber === "1" && date === 0 || plateNumber === "2" && date === 0 ){
          return document.getElementById("response").innerHTML = "Is Monday, you can't take your car for a spin because you have pico y placa from 7:00 AM to 9:30 AM and 16:00 PM to 19:30PM"
        }else if(plateNumber === "3" && date === 1 || plateNumber === "4" && date === 1 ){
          return document.getElementById("response").innerHTML = "Is Tuesday, you can't take your car for a spin because you have pico y placa from 7:00 AM to 9:30 AM and 16:00 PM to 19:30PM"
        }else if(plateNumber === "5" && date === 2 || plateNumber === "6" && date === 2 ){
          return document.getElementById("response").innerHTML = "Is Wednesday, you can't take your car for a spin because you have pico y placa from 7:00 AM to 9:30 AM and 16:00 PM to 19:30PM"
        }else if(plateNumber === "7" && date === 3 || plateNumber === "8" && date === 3 ){
          return document.getElementById("response").innerHTML = "Is Thursday, you can't take your car for a spin because you have pico y placa from 7:00 AM to 9:30 AM and 16:00 PM to 19:30PM"
        }else if(plateNumber === "9" && date === 4 || plateNumber === "0" && date === 4 ){
          return document.getElementById("response").innerHTML = "Is Friday, you can't take your car for a spin because you have pico y placa from 7:00 AM to 9:30 AM and 16:00 PM to 19:30PM"
        }else{
          return document.getElementById("response").innerHTML = "You are free to take your car for a spin"
        }
      }else{
        return document.getElementById("response").innerHTML = "You are free to take your car for a spin"
      }
    }

    useEffect(() => {
      if(callToRender){
        setTimeout(()=>{
          conditionalResponse();
        },1000);
      }
     });

  return ( 
    <div className="mt-4">
      <h4>Please enter the inputs required</h4>
      <form>
        <div className="form-group mt-4">
          <label>Plate number:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your plate number like GXA-0103"
            maxLength="8"
            id="plateNumber"
            name={plateNumber}
            onChange={(event)=> setplateNumber(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter the date"
            id="date"
            name={date}
            onChange={(event)=> setDate(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Hour:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter an hour like 7:00"
            id="hour"
            name={hour}
            onChange={(event)=> setHour(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        <div id="response"></div>
      </form>
    </div>
  );
  
};
export default Predictor;
