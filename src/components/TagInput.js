import { useState } from "react";
import TagTokens from "./TagTokens";

export default function TagInput() {
  let [tags, setTags] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (value !== "" && e.key === "Enter") {
      // is typed value a duplicate?
      const isFound = tags.some(
        (tag) => value.toLowerCase() === tag.tagValue.toLowerCase()
      );
      isFound
        ? setTags([...tags])
        : setTags([
            ...tags,
            {
              id: `${value.replace(/\s+/g, "").toLowerCase()}${value.length}`,
              tagValue: value,
            },
          ]);
      setValue("");
    }
    if (tags.length !== 0 && e.key === "Backspace" && value === "") {
      setTags(tags.filter((tag) => tag.id !== tags[tags.length - 1].id));
    }
  };

  const handleClick = (e) => {
    setTags(tags.filter((tag) => tag.id !== e.target.parentElement.id));
  };

  return (
    <div
      className="tag-input"
      style={{
        padding: "0 5px",
        marginTop: "10px",
        border: "1px solid black",
        overflowX: "auto",
      }}
    >
      <TagTokens tags={tags} onClick={handleClick} />
      <input
        type="text"
        name="tag"
        id="tag"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          padding: "5px 0",
          marginLeft: "5px",
          display: "inline",
          boxSizing: "border-box",
          border: "none",
          outline: "none",
        }}
      />
    </div>
  );
}
