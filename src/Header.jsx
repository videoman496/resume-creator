import { useState } from "react";
import NameInputComponent from "./NameInputComponent";
import NameDisplayComponent from "./NameDisplayComponent";
import PositionInputComponent from "./PositionInputComponent";
import PositionDisplayComponent from "./PositionDisplayComponent";
import SummaryInputComponent from "./SummaryInputComponent";
import DisplaySummaryComponent from "./SummaryDisplayComponent";
function App() {
  const [nameValue, setNameValue] = useState("John Doe");
  const [positionValue, setPositionValue] = useState("Someone");
  const [summaryValue, setSummaryValue] = useState("Dynamic and results-oriented Marketing Professional with over 7 years of experience in creating innovative marketing strategies that drive brand growth and improve market presence. Proven track record in managing successful digital marketing campaigns, social media engagement, and content development. Adept at using data analytics to inform decision-making and optimize marketing performance. Exceptional communication and leadership skills, with the ability to collaborate effectively across departments and lead high-performing teams. Committed to staying ahead of industry trends and continuously improving marketing techniques.");

  const handleNameChange = (value) => {
    setNameValue(value); // Обновляем состояние имени
  };

  const handlePositionChange = (value) => {
    setPositionValue(value); // Обновляем состояние должности
  };
  
  const handleSummaryChange = (value) => {
    setSummaryValue(value); // Обновляем состояние должности
  };

  return (
    <div style={{marginTop:50}}>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <div style={{ marginRight:100 }}>
          <NameInputComponent onInputChange={handleNameChange} />
        </div>
        <div style={{ flex: 1 }}>
          Position: <NameDisplayComponent displayValue={nameValue} />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight:100 }}>
          <PositionInputComponent onInputChange={handlePositionChange} />
        </div>
        <div className="pdf-content" style={{ flex: 1 }}>
          Position<PositionDisplayComponent displayPositionValue={positionValue} />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight:100 }}>
          <SummaryInputComponent onInputChange={handleSummaryChange} />
        </div>
        <div className="pdf-content" style={{ flex: 1 }}>
          Summary<DisplaySummaryComponent displaySummaryValue={summaryValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
