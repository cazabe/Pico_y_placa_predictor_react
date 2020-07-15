import React, {useState} from "react";



const Predictor = () => {
    const[plateNumber , setplateNumber] = useState("");
    const[date , setDate] = useState("")
    const[hour , setHour] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault();
    }

  return (
    <div className="mt-4">
      <h4>Please enter the inputs required</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label for="email">Plate number:</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter your plate number"
            id="email"
          />
        </div>
        <div className="form-group">
          <label for="email">Date:</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter the date"
            id="email"
          />
        </div>
        <div className="form-group">
          <label for="email">Hour:</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter an hour"
            id="email"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default Predictor;
