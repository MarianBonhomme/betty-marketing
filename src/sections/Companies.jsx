import React from "react";
import ExternalLink from "../components/ExternalLink";
import { companiesLinks } from "../utils/Links";

export default function Companies() {
  return (
    <section id="companies">
      <div className="max-w-responsive mx-auto flex select-none items-center justify-center gap-20 px-20 py-10 shadow-md">
        <ExternalLink url={companiesLinks.golf}>
          <img
            src="assets/images/golf.png"
            alt="Golf de la Gardiole"
            className="h-24 w-24"
          />
        </ExternalLink>
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
