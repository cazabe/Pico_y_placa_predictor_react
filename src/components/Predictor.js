import React, { useState, useEffect } from "react";
import trafficPicture from "../assets/trafficPicture.jpg";
import { Alert } from "reactstrap";

const Predictor = () => {
  const [plateNumber, setplateNumber] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [callToRender, setcallToRender] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      plateNumber !== "" &&
      date !== "" &&
      hour !== "" &&
      document.getElementById("plateNumber").value !== "" &&
      document.getElementById("hour").value !== ""
    ) {
      plateLastDigit();
      extracDay();
      setHour(hour);
      setcallToRender(true);
    } else {
      setError(true);
      setErrorMessage("You must field all inputs");
      setTimeout(() => {
        setError(false);
        setErrorMessage("");
      }, 2000);
    }
  };

  const plateLastDigit = () => {
    let fullPlate = plateNumber.split("");
    let lastDigit = fullPlate.pop();
    return setplateNumber(lastDigit);
  };

  const extracDay = () => {
    let dt = new Date(date);
    let day = dt.getDay();
    return setDate(day);
  };

  const cleanData = () => {
    document.getElementById("plateNumber").value = "";
    document.getElementById("hour").value = "";
    document.getElementById("date").value = "";
    setcallToRender(false);
  };

  const conditionalResponse = () => {
    if (
      hour === "07:00" ||
      hour === "09:30" ||
      hour === "16:00" ||
      hour === "19:30"
    ) {
      if (
        (plateNumber === "1" && date === 0) ||
        (plateNumber === "2" && date === 0)
      ) {
        return (document.getElementById("response").innerHTML =
          "Is Monday, you can't take your car for a spin because you have pico y placa from 7:00 AM to 9:30 AM and 16:00 PM to 19:30PM");
      } else if (
        (plateNumber === "3" && date === 1) ||
        (plateNumber === "4" && date === 1)
      ) {
        return (document.getElementById("response").innerHTML =
          "Is Tuesday, you can't take your car for a spin because you have pico y placa from 7:00 AM to 9:30 AM and 16:00 PM to 19:30PM");
      } else if (
        (plateNumber === "5" && date === 2) ||
        (plateNumber === "6" && date === 2)
      ) {
        return (document.getElementById("response").innerHTML =
          "Is Wednesday, you can't take your car for a spin because you have pico y placa from 7:00 AM to 9:30 AM and 16:00 PM to 19:30PM");
      } else if (
        (plateNumber === "7" && date === 3) ||
        (plateNumber === "8" && date === 3)
      ) {
        return (document.getElementById("response").innerHTML =
          "Is Thursday, you can't take your car for a spin because you have pico y placa from 7:00 AM to 9:30 AM and 16:00 PM to 19:30PM");
      } else if (
        (plateNumber === "9" && date === 4) ||
        (plateNumber === "0" && date === 4)
      ) {
        return (document.getElementById("response").innerHTML =
          "Is Friday, you can't take your car for a spin because you have pico y placa from 7:00 AM to 9:30 AM and 16:00 PM to 19:30PM");
      } else {
        return (document.getElementById("response").innerHTML =
          "You are free to take your car for a spin");
      }
    } else {
      return (document.getElementById("response").innerHTML =
        "You are free to take your car for a spin");
    }
  };

  useEffect(() => {
    if (callToRender) {
      setTimeout(() => {
        conditionalResponse();
      }, 800);
    }
  });

  return (
    <div className="mt-4">
      <h4>Please enter the inputs required</h4>
      <div className="row col-md-12">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-4">
              <label>Plate number:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your plate number like GXA-0103"
                maxLength="8"
                id="plateNumber"
                name={plateNumber}
                onChange={(event) => setplateNumber(event.target.value)}
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
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Hour:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter an hour like 07:00"
                id="hour"
                name={hour}
                maxLength="5"
                pattern="^\d{2}:\d{2}$"
                title="You must use a time format like this 7:00"
                onChange={(event) => setHour(event.target.value)}
              />
            </div>
            <div className="row pl-3">
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>

              <div className="form-group ">
                <button
                  type="button"
                  className="btn btn-danger ml-3"
                  onClick={cleanData}
                >
                  Try again
                </button>
              </div>
            </div>
          </form>
          {callToRender ? (
            <Alert className="event-validation" color="warning">
              <div id="response"></div>
            </Alert>
          ) : (
            ""
          )}
          {error ? (
            <Alert className="event-validation" color="danger">
              {errorMessage}
            </Alert>
          ) : (
            ""
          )}
        </div>
        <div className="col-md-6">
          <img
            src={trafficPicture}
            alt="traffic"
            style={{ height: "400px", width: "500px" }}
          />
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@vork?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Mark Boss
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/traffic-police?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Predictor;
