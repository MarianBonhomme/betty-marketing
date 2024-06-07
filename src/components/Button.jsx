import React from "react";

export default function Button({ text, clicked, css }) {
  return (
    <div
      className={`max-w-fit cursor-pointer select-none px-5 py-3 text-center uppercase tracking-widest text-white ${css && css} transition hover:brightness-110`}
      onClick={clicked}
    >
      {text}
    </div>
  );
}
