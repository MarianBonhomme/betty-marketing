import React from "react";
import ExternalLink from "./ExternalLink";
import { companiesLinks } from "../utils/Links";

export default function Companies() {
  return (
    <section id="companies" className="px-20 py-10 flex items-center justify-center gap-20 shadow-md">
      <ExternalLink url={companiesLinks.golf}>
        <img
          src="src/assets/images/golf.png"
          alt="Golf de la Gardiole"
          className="h-24 w-24"
        />
      </ExternalLink>
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
    </section>
  );
}
