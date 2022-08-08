import React, { useContext } from "react";
import { JetContext } from "../Context/JetContext";

const Navbar = () => {
  const { Jets } = useContext(JetContext);
  return (
    <div className="navbar">
      <h1>JET AIRCRAFTS LIST</h1>
      <p>Total aircraft in the list: {Jets.length}</p>
    </div>
  );
};
export default Navbar;
