import TagInput from "./TagInput";

export default function TagInputWrapper({ expanded }) {
  return (
    <div
      className="tag-input-wrapper"
      style={{
        padding: "10px 20px",
        border: "1px solid #cccccc",
        visibility: expanded ? "visible" : "collapse",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <label htmlFor="tag">Add New Tag</label>
      <TagInput />
    </div>
  );
}
