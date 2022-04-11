import React from "react";
import { useState, useEffect } from "react";

export const Stopwatch = (props) => {


    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
      props.passUpTime(time);

      setTime(0);

      
      setRunning(props.start);
  }, [props.start])

 

    useEffect(() => {
      let interval;
      if (running) {

        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);





  return <div>Time: {time}{running}</div>;
};
