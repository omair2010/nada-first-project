import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [inputValue, setInputValue] = useState("");

  const [array, setArray] = useState([]);

  const changeInputValue = (e) => setInputValue(e.target.value);

  const handleClickGurd = () => {
    setArray([...array, inputValue]);
    setInputValue("");
  };
  
  return (
    <div className="App">
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClickGurd}>Ajouter</button>
      </div>
      {array.map((ele) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <b>{ele}</b>
        </div>
      ))}
    </div>
  );
};

export default App;
