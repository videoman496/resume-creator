import { useState } from "react";

// eslint-disable-next-line react/prop-types
function InputComponent({ onInputChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your name"
        className="styled-input"
      />
    </div>
  );
}

export default InputComponent;
 