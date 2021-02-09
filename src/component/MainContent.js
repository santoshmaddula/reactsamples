import React from "react";
import Greetings from "./Greetings";

function MainContent() {
  const firstname = "Santosh";
  const lastname = "Kumar";

  //return <main>This is my first react application</main>;

  return (
    <div>
      <main>
        Hello {`${firstname} ${lastname}`} <Greetings /> Welcome to React
        Application
      </main>
    </div>
  );
}

export default MainContent;
