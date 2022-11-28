import React from "react";
import "./Timer.scss";


const Timer = ({ timerMonths ,timerDays, timerHours, timerMinutes }) => {
  return (
    <div className="container">
      <ul className="time">
        <li className="block">
          <p className="block__title">Month</p>
          <span className="num_months">{timerMonths}</span>
        </li>
        <li className="block">
          <p className="block__title">Days</p>
          <span className="days">{timerDays}</span>
        </li>
        <li className="block">
          <p className="block__title">Hours</p>
          <span className="hours">{timerHours}</span>
        </li>
        <li className="block">
          <p className="block__title">Minutes</p>
          <span className="minutes">{timerMinutes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Timer;
