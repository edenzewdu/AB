import React from "react";

const Logo = () => {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="90" fill="#F9A825" />

      <text
        x="100"
        y="100"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="80"
        fill="#FFFFFF"
        fontFamily="Arial"
        fontWeight="bold"
      >
        A
      </text>

      <text
        x="100"
        y="100"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="80"
        fill="#000000"
        fontFamily="Arial"
        fontWeight="bold"
      >
        B
      </text>
    </svg>
  );
};

export default Logo;