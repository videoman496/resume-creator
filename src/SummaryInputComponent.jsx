import { useState } from "react";

// eslint-disable-next-line react/prop-types
function SummaryInputComponent({ onInputChange }) {
  const [positionInputValue, setPositionInputValue] = useState("");

  const handlePositionChange = (e) => {
    const value = e.target.value;
    setPositionInputValue(value);
    onInputChange(value);
  };

  return (
    <div className="input-container">
      <textarea
        type="text"
        value={positionInputValue}
        onChange={handlePositionChange}
        placeholder="Enter the summary"
        rows="15"
        cols="39"
      />
    </div>
  );
}

export default SummaryInputComponent;
 