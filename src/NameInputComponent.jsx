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
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default InputComponent;
 