import React, { useState } from "react";
import Inbox from "./Inbox";
import Next7Days from "./Next7Days";
import Today from "./Today";

const list = [
  { number: 1, title: "Let's complete this", date: new Date("9/27/2022") ,completed:false},
  { number: 2, title: "Should sleep at 9pm", date: new Date("9/28/2022") ,completed:false},
  { number: 3, title: "Should complete react", date: new Date("10/5/2022") ,completed:false},
];

const MainSection = (props) => {
  return (
    <div className="main-section">
      {props.active === "INBOX" && (<Inbox />)}
      {props.active === "TODAY" && <Today />}
      {props.active === "NEXT" && <Next7Days />}
    </div>
  );
};

export default MainSection;
