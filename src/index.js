import React from "react";
import ReactDom from "react-dom";

const date = new Date();

const currentTime = date.getHours();

const Morning = "Good morning";
const day = "Good afternoon";
const Night = "Good evening";

const customStyle = {
  color: "yellow"
};

let greeting;

if (currentTime < 12) {
  greeting = Morning;
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = day;
  customStyle.color = "green";
} else {
  greeting = Night;
  customStyle.color = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
