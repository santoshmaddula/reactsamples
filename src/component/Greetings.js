import React from "react";

function Greetings() {
  const date = new Date();
  const hrs = date.getHours();

  let timeOfDay;

  if (hrs < 12) {
    timeOfDay = "Good Morning";
    console.log(timeOfDay);
  } else if (12 < hrs < 20) {
    timeOfDay = "Good Evening";
    console.log(timeOfDay);
  } else {
    timeOfDay = "Good Night";
    console.log(timeOfDay);
  }

  return <p>{timeOfDay}</p>;
}

export default Greetings;
