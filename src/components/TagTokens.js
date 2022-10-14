export default function ({ tags, onClick }) {
  const tokenStyle = {
    backgroundColor: "#eeeeee",
    color: "#222222",
    borderRadius: "2px",
    padding: "4px 8px",
    display: "inline-block",
    marginTop: "10px",
    whiteSpace: "no-wrap",
  };

  return (
    <div className="tag-tokens" style={{ overFlow: "scroll" }}>
      {tags.map((tag, i) => (
        <span
          key={tag.id}
          id={tag.id}
          className="tag-token"
          style={
            i !== tags.length - 1
              ? { ...tokenStyle, marginRight: "10px" }
              : tokenStyle
          }
        >
          {tag.tagValue}
          <span
            className="tag-token-delete"
            style={{ paddingLeft: "10px", cursor: "pointer" }}
            onClick={onClick}
          >
            &#10006;
          </span>
        </span>
      ))}
    </div>
  );
}
