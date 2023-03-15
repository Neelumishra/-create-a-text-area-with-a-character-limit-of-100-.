import React from "react";
import "./style.css";

export default function App() {
  const [value,setvalue] =React.useState(0)
  let maxLength =100;
  function handleChange(event) {
    const inputValue = event.target.value;
    if (inputValue.length <= maxLength) {
      setvalue(inputValue);
    }
  }

  return (
    <div>
      <textarea value={value} onChange={handleChange} />
      <p>
        {value.length}/{maxLength} characters
      </p>
    </div>
  );
}
