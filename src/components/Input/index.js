import React from "react";
import "./Input.css";

const Input = ({ value, onChange, label, isRequired }) => (
  <div class="form__group">
    {label && (
      <label style={{ fontWeight: "bold"}}>
        {label} {isRequired && <span class="required">*</span>}
      </label>
    )}
    <input value={value} onChange={onChange} className="field-long" />
  </div>
);

export default Input;
