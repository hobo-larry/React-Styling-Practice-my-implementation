import React from "react";
import ReactDOM from "react-dom";

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
function goodMorning() {
  const time = new Date();
  const hours = time.getHours();

  if (hours < 12) {
    return <div style={{ color: "red" }}>Good Morning</div>;
  } else if (hours < 18) {
    return <div style={{ color: "green" }}>Good Afternoon</div>;
  } else {
    return <div style={{ color: "blue" }}>Good Morning</div>;
  }
}

ReactDOM.render(
  <>
    <h1 className="heading">{goodMorning()}</h1>
  </>,
  document.getElementById("root")
);
