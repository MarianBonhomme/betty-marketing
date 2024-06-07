import React from "react";
import { useMobileMenu } from "../utils/MobileMenuContext";
import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";
import { socialLinks } from "../utils/Links";

export default function MenuMobile() {
  const { isMenuVisible } = useMobileMenu();

  return (
    <div
      className={`fixed z-50 flex h-screen w-screen flex-col justify-center gap-20 bg-light transition duration-300 ${isMenuVisible ? "" : "-translate-y-full"}`}
    >
      <ul className="mx-auto grid gap-5 text-center text-2xl font-bold uppercase">
        <li>
          <InternalLink section={"benefits"}>a propos</InternalLink>
        </li>
        <li>
          <InternalLink section={"services"}>mes services</InternalLink>
        </li>
        <li>
          <InternalLink section={"about"}>Qui suis-je?</InternalLink>
        </li>
        <li>
          <InternalLink section={"contact"}>Contact</InternalLink>
        </li>
      </ul>
      <ul className="flex items-center justify-center gap-5">
        <ExternalLink url={socialLinks.instagram}>
          <img
            src="assets/images/instagram.svg"
            alt="Instagram"
            className="h-8 w-8 cursor-pointer"
          />
        </ExternalLink>
        <ExternalLink url={socialLinks.threads}>
          <img
            src="assets/images/threads.svg"
            alt="Threads"
            className="h-8 w-8 cursor-pointer"
          />
        </ExternalLink>
        <ExternalLink url={socialLinks.facebook}>
          <img
            src="assets/images/facebook.svg"
            alt="Facebook"
            className="h-8 w-8 cursor-pointer"
          />
        </ExternalLink>
        <ExternalLink url={socialLinks.linkedin}>
          <img
            src="assets/images/linkedin.svg"
            alt="LinkedIn"
            className="h-8 w-8 cursor-pointer"
          />
        </ExternalLink>
      </ul>
    </div>
  );
}
