import React from "react";
import "./Timer.scss";

const today = new Date();
const dayX = new Date(2022, 10 - 1, 26, 4, 30);
const timeDistance = today - dayX;

let days = 0;
const hours = Math.floor(
  (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
while (dayX < today) {
  dayX.setDate(dayX.getDate() + 1);
  days++;
}

const Timer = () => {
  return (
    <div className="container">
      <ul className="time">
        <li className="block">
          <p className="block__title">Month</p>
          <span className="num_months">0</span>
        </li>
        <li className="block">
          <p className="block__title">Days</p>
          <span className="days">{days}</span>
        </li>
        <li className="block">
          <p className="block__title">Hours</p>
          <span className="hours">{hours}</span>
        </li>
        <li className="block">
          <p className="block__title">Minutes</p>
          <span className="minutes">{minutes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Timer;
