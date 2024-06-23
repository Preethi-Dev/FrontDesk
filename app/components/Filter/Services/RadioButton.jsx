import React from "react";

const RadioButton = ({ name, title, checked = false, onChange }) => {
  return (
    <div className="flex gap-2">
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default RadioButton;
