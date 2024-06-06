import React from "react";

export default function Title({ children, css }) {
  return (
    <h2
      className={`text-4xl font-bold uppercase tracking-wide text-secondary ${css && css}`}
    >
      {children}
    </h2>
  );
}
