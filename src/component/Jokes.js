import React from "react";

import JsonData from "./JokesData";
import Joke from "./Joke";

function Jokes() {
  const jokecomponents = JsonData.map(joke => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  });

  return <div>{jokecomponents}</div>;
}

export default Jokes;
