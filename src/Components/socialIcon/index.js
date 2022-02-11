import React, { useState } from "react";
import "./index.css";

function SocialIcon(props) {
  return (
    <>
      <div className="phone">
        <i class={props.iconClass}></i>
      </div>
    </>
  );
}

export default SocialIcon;
