import logo from "./logo.svg";
import "./App.css";
import TagButton from "./components/TagButton";
// import TagTokens from "./components/TagTokens";
import TagInput from "./components/TagInput";
import { useState } from "react";

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
      <TagInput expanded={expanded} />
    </div>
  );
}

export default App;
