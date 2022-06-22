import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  const onClick = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  return (
    <div>
      <button
        style={{ backgroundColor: color, color: "white" }}
        onClick={onClick}
      >
        {color === "red" ? "Change to blue" : "Change to red"}
      </button>
    </div>
  );
}

export default App;
