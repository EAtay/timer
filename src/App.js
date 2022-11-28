import "./App.scss";
import { useState, useEffect } from "react";
import Timer from "./components/Timer";

function App() {
  const [timerMonths, setMonths] = useState();
  const [timerDays, setDays] = useState();
  const [timerHours, setHours] = useState();
  const [timerMinutes, setMinutes] = useState();

  let interval;

  const startTimer = () => {
    const dayX = new Date(2022, 10 - 1, 26, 4, 30).getTime();

    interval = setInterval(() => {
      const dataNow = new Date().getTime();

      const timeDistance = dataNow - dayX;

      const months = Math.floor(timeDistance / (1000 * 60 * 60 * 24 * 7 * 4));
      const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ); 
      const minutes = Math.floor(
        (timeDistance % (1000 * 60 * 60)) / (1000 * 60)
      );
      if(timeDistance > 0 ){
        setMonths(months);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
      }
    });
  };

  useEffect(() => {
    startTimer();
  })

  return (
    <div className="App">
      <Timer
        timerMonths={timerMonths}
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
      />
    </div>
  );
}

export default App;
