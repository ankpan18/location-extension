import { CountButton } from "~features/count-button"
import Location from "~features/location-button";
import React, { useEffect, useState } from "react";

import "~style.css"

function IndexPopup() {
  return (
    <div className="pop_div">
      {/* <CountButton/> */}
      <Location/>
    </div>
  )
}

export default IndexPopup
