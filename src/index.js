import React from "react";
import ReactDOM from "react-dom";

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const time = new Date();
const hours = time.getHours();
let greetings = "";
const customStyle = {
  color: "",
};

if (hours < 12) {
  greetings = "Good Morning";
  customStyle.color = "red";
} else if (hours < 18) {
  greetings = "Good Afternoon";
  customStyle.color = "green";
} else {
  greetings = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <>
    <h1 className="heading" style={customStyle}>
      {greetings}
    </h1>
  </>,
  document.getElementById("root")
);












//udemy implementaion

import React from "react";
import ReactDOM from "react-dom";

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const time = new Date();
const hours = time.getHours();
let greetings = "";
const customStyle = {
  color: "",
};

if (hours < 12) {
  greetings = "Good Morning";
  customStyle.color = "red";
} else if (hours < 18) {
  greetings = "Good Afternoon";
  customStyle.color = "green";
} else {
  greetings = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <>
    <h1 className="heading" style={customStyle}>
      {greetings}
    </h1>
  </>,
  document.getElementById("root")
);

