import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";

export const ToggleSwitch = () => {
  const [isOn, setisOn] = useState(true);

  const handleToggleSwitch = () => {
    setisOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };

  return (
    <>
      <h1 className="text-blue-200 text-center">Toggle Switch
      <IoIosSwitch className="text-red-600" />
      <PiUserSwitchFill/>
      </h1>
      <div
        className=" toggle-switch" 
        onClick={handleToggleSwitch}
        style={toggleBGColor}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};
