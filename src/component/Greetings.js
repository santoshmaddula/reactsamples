import React from "react";

function Greetings() {
  const date = new Date();
  const hrs = date.getHours();

  let timeOfDay;

  if (hrs < 12) {
    timeOfDay = "Good Morning";
  } else if (12 < hrs < 20) {
    timeOfDay = "Good Evening";
  } else {
    timeOfDay = "Good Night";
  }

  return <p>{timeOfDay}</p>;
}

export default Greetings;
