import React from "react";

const Button = ({
  customFunc,
  color,
  bgColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  return (
    <button
      onClick={customFunc}
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width}`}
    >
      {text}
    </button>
  );
};

export default Button;
