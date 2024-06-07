import React from "react";
import Text from "../components/Text";
import Button from "../components/Button";
import ExternalLink from "../components/ExternalLink";
import { socialLinks } from "../utils/Links";
import InternalLink from "../components/InternalLink";

export default function About() {
  return (
    <section id="about" className="bg-black">
      <div className="max-w-responsive mx-auto flex items-center justify-center gap-10 px-5 py-20 max-sm:flex-col sm:gap-20 sm:p-20">
        <div className="relative flex h-[350px] w-[350px] select-none items-center justify-center">
          <img
            src="assets/images/cadre.svg"
            alt="décoration cadre ornement"
            className="absolute left-0 top-0 h-full w-full"
          />
          <div className="h-[250px] w-[200px] bg-white pt-[15px]" data-aos="zoom-out-up" data-aos-offset="400">
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
        <div className="flex flex-col gap-5 sm:w-1/2">
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
              Betty Marketing digital est un service de Community Management
              (CM) chargé de gérer et animer vos réseaux sociaux d’entreprise ou
              de marque. Par conséquent, j’assure la préservation de votre
              e-réputation en ligne. A cet effet, Betty Marketing Digital, vous
              propose un service de CM, quel que soit votre domaine d’activité.
            </Text>
          </div>
          <div className="mt-2 flex justify-between max-sm:flex-col sm:items-end">
            <InternalLink section={"contact"}>
              <Button
                text={"Contacte-moi"}
                css={"bg-primary text-black font-bold text-sm"}
              />
            </InternalLink>
            <ul className="flex select-none items-center gap-5 max-sm:mt-8 sm:justify-end">
              <div data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-out-back" data-aos-anchor-placement="top">
                <ExternalLink url={socialLinks.instagram}>
                  <img
                    src="assets/images/instagram-primary.svg"
                    alt="Instagram"
                    className="h-8 w-8 cursor-pointer sm:h-6 sm:w-6"
                  />
                </ExternalLink>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out-back" data-aos-anchor-placement="top">
                <ExternalLink url={socialLinks.threads}>
                  <img
                    src="assets/images/threads-primary.svg"
                    alt="Threads"
                    className="h-8 w-8 cursor-pointer sm:h-6 sm:w-6"
                  />
                </ExternalLink>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-out-back" data-aos-anchor-placement="top">
                <ExternalLink url={socialLinks.facebook}>
                  <img
                    src="assets/images/facebook-primary.svg"
                    alt="Facebook"
                    className="h-8 w-8 cursor-pointer sm:h-6 sm:w-6"
                  />
                </ExternalLink>
              </div>
              <div data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-out-back" data-aos-anchor-placement="top">
                <ExternalLink url={socialLinks.linkedin}>
                  <img
                    src="assets/images/linkedin-primary.svg"
                    alt="LinkedIn"
                    className="h-8 w-8 cursor-pointer sm:h-6 sm:w-6"
                  />
                </ExternalLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
