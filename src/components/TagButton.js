import UilAngleDown from "@iconscout/react-unicons/icons/uil-angle-down";
import UilAngleUp from "@iconscout/react-unicons/icons/uil-angle-up";

export default function TagButton({ expanded, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        padding: "0 20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      aria-expanded={expanded}
    >
      <h2 style={{ fontSize: "16px" }}>Tags</h2>
      {expanded ? <UilAngleUp /> : <UilAngleDown />}
    </button>
  );
}
