import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Register from "./components/Register";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [repeatPassword, setRepeatPassowrd] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [array, setArray] = useState([]);

  const changeUserName = (e) => setInputValue(e.target.value);

  const handleClickGurd = () => {
    setArray([...array, inputValue]);
    setInputValue("");
  };

  return (
    <div className="App">
      {/*       <div style={{ marginTop: "3rem" }}>
        <Input
          label="add Text"
          value={inputValue}
          onChange={changeInputValue}
        />
        <Button nada={handleClickGurd} color="cyan">
          Ajouter
        </Button>
      </div>
      {array.map((ele) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <b>{ele}</b>
        </div>
      ))} */}
      <Register
        userName={name}
        changeUserName={(e) => setName(e.target.value)}
        userEmail={email}
        setUserEmail={(e) => setEmail(e.target.value)}
        userPassword={password}
        setUserPassword={(e) => setPassword(e.target.value)}
        userRepeatPassword={repeatPassword}
        setUserRepeatPassword={(e) => setRepeatPassowrd(e.target.value)}
      />
    </div>
  );
};

export default App;
