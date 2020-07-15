import React, {useState,useEffect} from "react";



const Predictor = () => {
    const[plateNumber , setplateNumber] = useState("");
    const[date , setDate] = useState("")
    const[hour , setHour] = useState("")
    const[calculo , setCalculo] = useState(false);


    const handleSubmit = (event)=>{
        event.preventDefault();
        plateLastDigit();
        extracDay();
        setCalculo(true);
    }

    const plateLastDigit = ()=>{
     let fullPlate = plateNumber.split("");
     let lastDigit = fullPlate.pop();
     return setplateNumber(lastDigit);
    }
    
    const extracDay = ()=>{
      let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        let dt = new Date(date.replace(pattern, "$3-$2-$1"));
        let day = dt.getDay();
        return setDate(day);
        
    }
    console.log("numero de matricula:" , plateNumber , " fecha" , date , " hour ", hour);

    const conditionalResponse = ()=>{
      console.log("Dentro de la funcion conditionalResponse: ", plateNumber, " ", date);
      if(plateNumber === "3" && date === 1){
        return document.getElementById("response").innerHTML = "Is tusday, you can't take your car for a spin"
      }else{
        return document.getElementById("response").innerHTML = "you can take your car for a spin"
      }
    }

    useEffect(() => {
      if(calculo){
        setTimeout(()=>{
          conditionalResponse();
        },1000)
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
