import React from "react";
import Text from "../components/Text";
import Button from "../components/Button";
import ExternalLink from "../components/ExternalLink";
import { socialLinks } from "../utils/Links";
import InternalLink from "../components/InternalLink";

export default function About() {
  return (
    <section id="about" className="bg-black">
      <div className="max-w-responsive mx-auto flex items-center justify-center gap-20 p-20">
        <div className="flex h-[350px] w-[350px] items-center justify-center relative select-none">
          <img src="assets/images/cadre.svg" alt="décoration cadre ornement" className="absolute top-0 left-0 w-full h-full " />
          <div className="h-[250px] w-[200px] -rotate-3 bg-white pt-[15px]">
            <img
              src="assets/images/btissam.jpg"
              alt="Btissam"
              className="mx-auto h-[170px] w-[170px]"
            />
            <p className="mt-3 text-center text-xl/5 font-bold text-secondary">
              Btissam Aboubeker Lamhamdi
            </p>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-5">
          <p className="text-4xl font-bold italic text-primary">Qui suis-je?</p>
          <div className="grid gap-3 text-justify text-white">
            <Text>
              Après avoir lancé leur entreprise, de nombreuses personnes
              abandonnent rapidement la gestion de leurs réseaux sociaux par
              manque de temps ou de compétences. Cela semble simple mais en
              réalité, c’est une lourde responsabilité qui requiert une quantité
              significative de temps et de savoir-faire.
            </Text>
            <Text>
              Betty Marketing digital est un service de Community Management (CM)
              chargé de gérer et animer vos réseaux sociaux d’entreprise ou de
              marque. Par conséquent, j’assure la préservation de votre
              e-réputation en ligne. A cet effet, Betty Marketing Digital, vous
              propose un service de CM, quel que soit votre domaine d’activité.
            </Text>
          </div>
          <div className="mt-2 flex items-end justify-between">
            <InternalLink section={'contact'}>
              <Button
                text={"Contacte-moi"}
                css={"bg-primary text-black font-bold text-sm"}
              />
            </InternalLink>
            <ul className="flex items-center justify-end gap-5 select-none">
              <ExternalLink url={socialLinks.instagram}>
                <img
                  src="assets/images/instagram-primary.svg"
                  alt="Instagram"
                  className="h-6 w-6 cursor-pointer"
                />
              </ExternalLink>
              <ExternalLink url={socialLinks.threads}>
                <img
                  src="assets/images/threads-primary.svg"
                  alt="Threads"
                  className="h-6 w-6 cursor-pointer"
                />
              </ExternalLink>
              <ExternalLink url={socialLinks.facebook}>
                <img
                  src="assets/images/facebook-primary.svg"
                  alt="Facebook"
                  className="h-6 w-6 cursor-pointer"
                />
              </ExternalLink>
              <ExternalLink url={socialLinks.linkedin}>
                <img
                  src="assets/images/linkedin-primary.svg"
                  alt="LinkedIn"
                  className="h-6 w-6 cursor-pointer"
                />
              </ExternalLink>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}