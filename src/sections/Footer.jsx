import React from "react";
import Logo from "../components/Logo";
import InternalLink from "../components/InternalLink";
import { cmServices, photoServices } from "../utils/Services";
import { contact } from "../utils/Contact";
import ExternalLink from "../components/ExternalLink";
import { socialLinks } from "../utils/Links";

export default function Footer() {
  return (
    <footer className="bg-light shadow-inner">
      <div className="max-w-responsive mx-auto px-5 sm:px-20 pt-10 sm:pt-20">
        <div className="flex justify-evenly max-sm:flex-col sm:gap-10">
          <div className="flex flex-col items-center gap-5 max-sm:pb-10">
            <Logo />
            <ul className="flex select-none items-center gap-5">
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
            </ul>
          </div>
          <div className="max-sm:border-t max-sm:border-primary max-sm:py-5">
            <h3 className="mb-3 text-xl font-bold">Information</h3>
            <InternalLink section={"benefits"}>
              <h4>À propos</h4>
            </InternalLink>
            <InternalLink section={"services"}>
              <h4>Mes services</h4>
            </InternalLink>
            <InternalLink section={"companies"}>
              <h4>Partenaires</h4>
            </InternalLink>
            <InternalLink section={"about"}>
              <h4>Qui suis-je?</h4>
            </InternalLink>
            <InternalLink section={"contact"}>
              <h4>Contacte-moi</h4>
            </InternalLink>
          </div>
          <div className="max-sm:border-t max-sm:border-primary max-sm:py-5">
            <h3 className="mb-3 text-xl font-bold">Community Management</h3>
            {cmServices.map((service) => (
              <h4 key={service.title}>{service.title}</h4>
            ))}
          </div>
          <div className="max-sm:border-t max-sm:border-primary max-sm:py-5">
            <h3 className="mb-3 text-xl font-bold">Graphisme / Photo</h3>
            {photoServices.map((service) => (
              <h4 key={service.title}>{service.title}</h4>
            ))}
          </div>
          <div className="max-sm:border-t max-sm:border-primary max-sm:py-5">
            <h3 className="mb-3 text-xl font-bold">Coordonnées</h3>
            <div className="flex items-center gap-3">
              <img
                src="assets/images/phone.png"
                alt="Téléphone"
                className="h-4 w-4 select-none"
              />
              <p>{contact.phone}</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="assets/images/email.png"
                alt="Email"
                className="h-4 w-4 select-none"
              />
              <p>{contact.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="assets/images/company.png"
                alt="Entreprise"
                className="h-4 w-4 select-none"
              />
              <p>{contact.company}</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="assets/images/pin.png"
                alt="Localisation"
                className="h-4 w-4 select-none"
              />
              <p>{contact.localisation}</p>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-primary sm:text-center py-5 sm:mt-20">
          © 2024 - Betty Marketing Digital - All rights reserved
        </div>
      </div>
    </footer>
  );
}
