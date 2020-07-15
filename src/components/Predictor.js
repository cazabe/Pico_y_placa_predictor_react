import React, {useState} from "react";



const Predictor = () => {
    const[plateNumber , setplateNumber] = useState("");
    const[date , setDate] = useState("")
    const[hour , setHour] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault();
        plateLastDigit();
        
    }

    const plateLastDigit = ()=>{
     let fullPlate = plateNumber.split("");
     let lastDigit = fullPlate.pop();
     return setplateNumber(lastDigit);
    }

    
     console.log("numero de matricula:" , plateNumber , " fecha" , date , " hour ", hour);

  return (
    <div className="mt-4">
      <h4>Please enter the inputs required</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label>Plate number:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your plate number"
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
            placeholder="Enter an hour"
            id="hour"
            name={hour}
            onChange={(event)=> setHour(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default Predictor;
