import { useState } from "react";
import TagTokens from "./TagTokens";

export default function ({ expanded }) {
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
        padding: "10px 20px",
        position: "relative",
        border: "1px solid #cccccc",
        visibility: expanded ? "visible" : "collapse",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <label>
        Add New Tag
        <input
          type="text"
          name="tag"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{
            width: "100%",
            padding: "2px",
            marginTop: "10px",
            boxSizing: "border-box",
          }}
        />
      </label>

      <TagTokens tags={tags} onClick={handleClick} />
    </div>
  );
}
