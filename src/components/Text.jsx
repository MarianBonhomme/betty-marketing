import React from "react";

export default function Text({ children, css }) {
  return <p className={`text-base/5 ${css && css}`}>{children}</p>;
}
