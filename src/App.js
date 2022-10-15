import "./App.css";
import TagButton from "./components/TagButton";
import { useState } from "react";
import TagInputWrapper from "./components/TagInputWrapper";

function App() {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "300px",
        width: "300px",
        height: "200px",
      }}
    >
      <TagButton expanded={expanded} onClick={handleClick} />
      <TagInputWrapper expanded={expanded} />
    </div>
  );
}

export default App;
