import React from "react";
import Button from "./Button";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="bg-light grid select-none grid-cols-3 px-10 py-6 uppercase tracking-widest text-dark shadow-lg">
      <ul className="flex items-center gap-5 text-lg">
        <li>Tarifs</li>
        <li>Services</li>
        <li>Qui suis-je?</li>
      </ul>
      <h1 className="grid text-center">
        <Logo />
      </h1>
      <ul className="flex items-center justify-end gap-5">
        <img
          src="src/assets/images/instagram.svg"
          alt="instagram"
          className="h-6 w-6 cursor-pointer"
        />
        <img
          src="src/assets/images/threads.svg"
          alt="threads"
          className="h-6 w-6 cursor-pointer"
        />
        <img
          src="src/assets/images/facebook.svg"
          alt="facebook"
          className="h-6 w-6 cursor-pointer"
        />
        <Button text={"contact"} css={"ml-10"} />
      </ul>
    </div>
  );
}