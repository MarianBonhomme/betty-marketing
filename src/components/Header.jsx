import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";
import { socialLinks } from "../utils/Links";

export default function Header() {
  return (
    <nav className="fixed z-50 grid w-full select-none grid-cols-3 bg-light px-20 py-3 uppercase text-dark shadow-md">
      <ul className="flex items-center gap-5 font-bold">
        <li>
          <InternalLink section={"benefits"}>a propos</InternalLink>
        </li>
        <li>
          <InternalLink section={"services"}>mes services</InternalLink>
        </li>
        <li>
          <InternalLink section={"about"}>Qui suis-je?</InternalLink>
        </li>
      </ul>
      <h1 className="grid text-center tracking-widest">
        <Logo />
      </h1>
      <ul className="flex items-center justify-end gap-5">
        <ExternalLink url={socialLinks.instagram}>
          <img
            src="src/assets/images/instagram.svg"
            alt="Instagram"
            className="h-6 w-6 cursor-pointer"
          />
        </ExternalLink>
        <ExternalLink url={socialLinks.threads}>
          <img
            src="src/assets/images/threads.svg"
            alt="Threads"
            className="h-6 w-6 cursor-pointer"
          />
        </ExternalLink>
        <ExternalLink url={socialLinks.facebook}>
          <img
            src="src/assets/images/facebook.svg"
            alt="Facebook"
            className="h-6 w-6 cursor-pointer"
          />
        </ExternalLink>
        <ExternalLink url={socialLinks.linkedin}>
          <img
            src="src/assets/images/linkedin.svg"
            alt="LinkedIn"
            className="h-6 w-6 cursor-pointer"
          />
        </ExternalLink>
        <InternalLink section={"contact"}>
          <Button text={"contact"} css={"bg-secondary ml-10"} />
        </InternalLink>
      </ul>
    </nav>
  );
}
