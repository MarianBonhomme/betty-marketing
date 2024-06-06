import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import ExternalLink from "./ExternalLink";
import { socialLinks } from "../utils/SocialLinks";
import InternalLink from "./InternalLink";
import ScrollToTop from "./ScrollToTop";

export default function Header() {
  return (
    <div className="bg-light fixed grid w-full select-none grid-cols-3 px-20 py-3 uppercase text-dark shadow-md">
      <ul className="flex items-center gap-5 font-bold">
        <li>
          <InternalLink section={"benefits"}>a propos</InternalLink>
        </li>
        <li>Services</li>
        <li>
          <InternalLink section={"about"}>Qui suis-je?</InternalLink>
        </li>
      </ul>
      <ScrollToTop>
        <h1 className="grid text-center tracking-widest">
          <Logo />
        </h1>
      </ScrollToTop>
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
        <Button text={"contact"} css={"ml-10"} />
      </ul>
    </div>
  );
}
