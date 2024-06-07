import React from "react";

export default function Button({ text, clicked, css }) {
  return (
    <div
      className={`max-w-fit cursor-pointer px-5 py-3 uppercase text-white tracking-widest select-none ${css && css} transition hover:brightness-110`}
      onClick={clicked}
    >
      {text}
    </div>
  );
}
