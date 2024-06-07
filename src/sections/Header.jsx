import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import ExternalLink from "../components/ExternalLink";
import InternalLink from "../components/InternalLink";
import { socialLinks } from "../utils/Links";

export default function Header() {
  return (
    <nav className="fixed z-50 w-full bg-light shadow-md">
      <div className="max-w-responsive mx-auto grid select-none grid-cols-3 px-20 py-3 uppercase">
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
              src="assets/images/instagram.svg"
              alt="Instagram"
              className="h-6 w-6 cursor-pointer"
            />
          </ExternalLink>
          <ExternalLink url={socialLinks.threads}>
            <img
              src="assets/images/threads.svg"
              alt="Threads"
              className="h-6 w-6 cursor-pointer"
            />
          </ExternalLink>
          <ExternalLink url={socialLinks.facebook}>
            <img
              src="assets/images/facebook.svg"
              alt="Facebook"
              className="h-6 w-6 cursor-pointer"
            />
          </ExternalLink>
          <ExternalLink url={socialLinks.linkedin}>
            <img
              src="assets/images/linkedin.svg"
              alt="LinkedIn"
              className="h-6 w-6 cursor-pointer"
            />
          </ExternalLink>
          <InternalLink section={"contact"}>
            <Button text={"contact"} css={"bg-secondary ml-10"} />
          </InternalLink>
        </ul>
      </div>
    </nav>
  );
}
