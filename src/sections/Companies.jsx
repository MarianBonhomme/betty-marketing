import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function Companies() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <section id="companies">
      <div
        className="max-w-responsive mx-auto flex select-none items-center sm:justify-center overflow-x-auto shadow-md p-10 gap-10 sm:gap-20 sm:px-20 sm:py-10"
        {...events}
        ref={ref}
      >
        <img
          src="assets/images/golf.png"
          alt="Golf de la Gardiole"
          className="h-24 w-24"
        />
        <img
          src="assets/images/tpms.jpg"
          alt="Travaux Publics Maintenance Service"
          className="h-32 w-32"
        />
        <img
          src="assets/images/spiritclean.png"
          alt="Spirit Clean Services"
          className="h-24 w-24"
        />
        <img
          src="assets/images/ecdanses.png"
          alt="EC Danses"
          className="h-24 w-24 rounded-full"
        />
      </div>
    </section>
  );
}
