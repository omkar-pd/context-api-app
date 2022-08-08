import React, { useContext } from "react";
import Jet from "./Jet";
import { JetContext } from "../Context/JetContext";
const JetList = () => {
  const { Jets } = useContext(JetContext);
  return (
    <div className="jet-list">
      {Jets.map((plane, index) => {
        return (
          <Jet key={index} name={plane.name} country={plane.country}></Jet>
        );
      })}
    </div>
  );
};
export default JetList;
