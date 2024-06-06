import React from "react";

export default function Button({ text, clicked, css }) {
  return (
    <div
      className={`max-w-fit cursor-pointer bg-secondary px-5 py-3 uppercase text-white tracking-widest ${css && css} transition hover:brightness-125`}
      onClick={clicked}
    >
      {text}
    </div>
  );
}
