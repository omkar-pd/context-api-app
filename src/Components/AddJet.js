import React, { useState, useContext } from "react";
import { JetContext } from "../Context/JetContext";
const AddJet = () => {
  const { setJets } = useContext(JetContext);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const AddJetHandler = (e) => {
    e.preventDefault();
    if(name==='' || country === '') return;
    setJets((prevList) => {
      return [...prevList, { name: name, country: country }];
    });
    setName("");
    setCountry("");
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const countryChangeHandler = (e) => {
    setCountry(e.target.value);
  };

  return (
    <>
      <form onSubmit={AddJetHandler} className='add-form'>
        <label htmlFor="name">Aircraft name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={countryChangeHandler}
        />
        <button>Add</button>
      </form>
    </>
  );
};
export default AddJet;
