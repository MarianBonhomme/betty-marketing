import React from "react";
import ScrollToTop from "./ScrollToTop";

export default function Logo() {
  return (
    <ScrollToTop>
      <p className="grid text-center uppercase select-none">
        <span className="text-6xl font-bold tracking-widest text-primary">
          Betty
        </span>
        <span className="text-sm/3 tracking-widest">Marketing Digital</span>
      </p>
    </ScrollToTop>
  );
}
