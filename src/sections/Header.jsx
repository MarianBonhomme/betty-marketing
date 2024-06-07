import React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import ExternalLink from "../components/ExternalLink";
import InternalLink from "../components/InternalLink";
import { socialLinks } from "../utils/Links";
import { useMobileMenu } from "../utils/MobileMenuContext";
import { Cross as Hamburger } from "hamburger-react";

export default function Header() {
  const { isMenuVisible, setIsMenuVisible } = useMobileMenu();

  return (
    <nav className="fixed z-50 w-screen bg-light shadow-md">
      <div className="max-w-responsive mx-auto grid select-none px-20 py-3 uppercase sm:grid-cols-3">
        <ul className="flex items-center gap-5 font-bold max-sm:hidden">
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
        <ul className="flex items-center justify-end gap-5 max-sm:hidden">
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
        <div className="absolute right-2 top-1/2 flex items-center justify-center -translate-y-1/2 sm:hidden">
          <Hamburger
            toggled={isMenuVisible}
            toggle={() => setIsMenuVisible(!isMenuVisible)}
            size={25}
            color="#5B5B5B"
            label="Ouvrir le menu" 
            direction="right"
          />
        </div>
      </div>
    </nav>
  );
}
