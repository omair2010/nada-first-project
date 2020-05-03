import React from "react";
import Input from "../Input";
import Button from "../Button";

const Register = ({
    userName,
    changeUserName,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userRepeatPassword,
    setUserRepeatPassword,
}) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
    <Input value={userName} onChange={changeUserName} label="Name" />
    <Input value={userEmail} onChange={setUserEmail} label="Email" />
    <Input value={userPassword} onChange={setUserPassword} label="Password" />
    <Input value={userRepeatPassword} onChange={setUserRepeatPassword} label="Password" />
    <Button />
  </div>
);

export default Register;
