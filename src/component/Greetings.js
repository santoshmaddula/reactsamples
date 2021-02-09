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

  const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    fontSize: "30px"
  };

  return (
    //inline styling
    // <h2 style={{ color: "#FF8C00", backgroundColor: "#FF2D00" }}>
    //   {timeOfDay}
    // </h2>
    <div>
      <h2 style={styles}>{timeOfDay}</h2>
      {`${date}`}
    </div>
  );
}

export default Greetings;
