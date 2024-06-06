import React from "react";
import Title from "./Title";

export default function Companies() {
  return (
    <div className="px-20 py-10 flex items-center justify-center gap-10 shadow-md">
      <img
        src="src/assets/images/golf.png"
        alt="Golf de la Gardiole"
        className="h-24 w-24"
      />
      <img
        src="src/assets/images/tpms.jpg"
        alt="Travaux Publics Maintenance Service"
        className="h-32 w-32"
      />
      <img
        src="src/assets/images/spiritclean.png"
        alt="Spirit Clean Services"
        className="h-24 w-24"
      />
      <img
        src="src/assets/images/ecdanses.png"
        alt="EC Danses"
        className="h-24 w-24 rounded-full"
      />
    </div>
  );
}
