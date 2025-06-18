import React from "react";

const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-3)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  borderRightColor: "var(--color-2)",
  animation: "spin 1s infinite",
  margin: "auto",
  marginTop: "5rem",
};

const Loading = () => {
  return <div style={style}></div>;
};

export default Loading;
