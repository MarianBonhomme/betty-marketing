import React from "react";
import Logo from "../components/Logo";
import InternalLink from "../components/InternalLink";
import { cmServices, photoServices } from "../utils/Services";
import { contact } from "../utils/Contact";
import ExternalLink from '../components/ExternalLink';
import { socialLinks } from "../utils/Links";

export default function Footer() {
  return (
    <footer className="bg-light shadow-inner">
      <div className="max-w-responsive mx-auto flex justify-evenly gap-10 p-20">
        <div className="flex flex-col items-center gap-5">
          <Logo />
          <ul className="flex items-center gap-5 select-none">
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
            <h4>Contacte-moi</h4>
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
            <img src="assets/images/phone.png" alt="Téléphone" className='w-4 h-4 select-none' />
            <p>{contact.phone}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="assets/images/email.png" alt="Email" className='w-4 h-4 select-none' />
            <p>{contact.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="assets/images/company.png" alt="Entreprise" className='w-4 h-4 select-none' />
            <p>{contact.company}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="assets/images/pin.png" alt="Localisation" className='w-4 h-4 select-none' />
            <p>{contact.localisation}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
