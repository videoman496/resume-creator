import { useState } from "react";

// eslint-disable-next-line react/prop-types
function PositionInputComponent({ onInputChange }) {
  const [positionInputValue, setPositionInputValue] = useState("");

  const handlePositionChange = (e) => {
    const value = e.target.value;
    setPositionInputValue(value);
    onInputChange(value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={positionInputValue}
        onChange={handlePositionChange}
        placeholder="Enter the position"
        className="styled-input"
      />
    </div>
  );
}

export default PositionInputComponent;
 