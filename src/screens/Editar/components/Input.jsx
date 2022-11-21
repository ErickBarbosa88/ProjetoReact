import { useState } from "react";

export default function Input({ value, onChange }) {
  const [valueText, setValueText] = useState(value);
  return (
    <input
      value={valueText}
      className="add-task-input"
      onChange={(e) => {
        setValueText(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
}
