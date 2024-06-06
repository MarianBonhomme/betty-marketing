import React from "react";

export default function Text({ children, css }) {
  return <p className={`text-lg/6 ${css && css}`}>{children}</p>;
}
