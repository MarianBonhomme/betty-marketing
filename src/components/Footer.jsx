import React from "react";
import Logo from "./Logo";
import InternalLink from "./InternalLink";
import { cmServices, photoServices } from "../utils/Services";
import { contact } from "../utils/Contact";
import ExternalLink from './ExternalLink';
import { socialLinks } from "../utils/Links";

export default function Footer() {
  return (
    <footer className="flex justify-evenly gap-10 bg-light p-20 shadow-inner">
      <div className="flex flex-col items-center gap-5">
        <Logo />
        <ul className="flex items-center gap-5 select-none">
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
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3">Information</h3>
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
          <h4>Contactez-moi</h4>
        </InternalLink>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3">Community Management</h3>
        {cmServices.map(service => (
          <h4>{service.title}</h4>
        ))}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3">Graphisme / Photo</h3>
        {photoServices.map(service => (
          <h4>{service.title}</h4>
        ))}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3">Coordonnées</h3>
        <div className="flex items-center gap-3">
          <img src="src/assets/images/phone.png" alt="Téléphone" className='w-4 h-4' />
          <p>{contact.phone}</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="src/assets/images/email.png" alt="Email" className='w-4 h-4' />
          <p>{contact.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="src/assets/images/company.png" alt="Entreprise" className='w-4 h-4' />
          <p>{contact.company}</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="src/assets/images/pin.png" alt="Localisation" className='w-4 h-4' />
          <p>{contact.localisation}</p>
        </div>
      </div>
    </footer>
  );
}
