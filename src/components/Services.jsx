import React from "react";
import Title from "./Title";
import Text from "./Text";
import Button from "./Button";
import InternalLink from "./InternalLink";

export default function Services() {
  const cmServices = [
    {
      title: "Audit",
      description:
        "Révèle les opportunités cachées avec un audit précis et perspicace",
      image: "audit.png",
    },
    {
      title: "Branding",
      description:
        "Fais rayonner ton identité avec un branding percutant et mémorable",
      image: "branding.png",
    },
    {
      title: "Stratégie digitale",
      description:
        "Navigue vers le sommet avec une stratégie digitale sur mesure",
      image: "strategie.png",
    },
    {
      title: "Création de contenu",
      description:
        "Inspire, informe, impressionne - crée un contenu qui captive",
      image: "pen.png",
    },
    {
      title: "Élaboration d’un planning éditorial",
      description:
        "Planifie ton succès avec un calendrier éditorial sur mesure",
      image: "planning.png",
    },
    {
      title: "Modération des messages et commentaires",
      description: "Protège ton image digitale avec une modération experte",
      image: "chat.png",
    },
    {
      title: "Retouche photos libres de droit",
      description: "Donne vie à ta marque avec des images uniques",
      image: "montage.png",
    },
    {
      title: "Veille concurentielle",
      description:
        "Reste en pole position avec une veille pointue sur tes concurrents",
      image: "loupe.png",
    },
    {
      title: "Reporting des statistiques",
      description:
        "Éclaire chaque pas de ton parcours avec des rapports mensuels enrichissants",
      image: "stats.png",
    },
  ];

  const photoServices = [
    {
      title: "Shooting photos et vidéos",
      description:
        "Capture l'instant, raconte ton histoire en images et vidéos de qualité professionnelle",
      image: "shooting.png",
    },
    {
      title: "logos",
      description:
        "Donne vie à ton identité visuelle avec un logo unique et mémorable",
      image: "palette.png",
    },
    {
      title: "cartes de visites",
      description:
        "Fais briller ta présence professionnelle avec des cartes de visite personnalisées et percutantes.",
      image: "visit-card.png",
    },
    {
      title: "flyers et affiches",
      description:
        "Fais rayonner ton message avec des flyers et affiches créatifs qui captent l'attention",
      image: "poster.png",
    },
    {
      title: "Élaboration identité visuelle",
      description:
        "Démarque-toi avec une identité visuelle distinctive qui reflète parfaitement ta personnalité et ton activité",
      image: "light.png",
    },
  ];

  return (
    <section id="services" className="p-20">
      <div className="relative mx-auto select-none">
        <Title css={"text-center absolute left-1/2 -translate-x-1/2"}>
          Mes services
        </Title>
        <img
          src="src/assets/images/ornement.svg"
          alt="décoration"
          className="mx-auto h-40"
        />
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="relative flex items-center">
          <h3 className="text-3xl font-bold uppercase italic text-secondary">
            Community Management
          </h3>
          <img
            src="src/assets/images/ornement-3.svg"
            alt="décoration"
            className="absolute bottom-0 right-0 h-20 select-none"
          />
        </div>
        {cmServices.map((service, index) => (
          <Card>
            <img
              src={`src/assets/images/${service.image}`}
              alt={service.title}
              className="h-10 w-10 select-"
            />
            <div>
              <h3 className="mb-2 text-lg/5 font-bold uppercase text-secondary">
                {service.title}
              </h3>
              <Text>{service.description}</Text>
            </div>
            <span className="absolute bottom-0 right-0 flex h-7 w-10 select-none items-end justify-center bg-primary text-xl text-white">
              {`${(index + 1).toString().padStart(2, "0")}.`}
            </span>
          </Card>
        ))}
      </div>
      <InternalLink section={'contact'}>
        <Button
          text={"Booste ta présence en ligne"}
          css={"bg-secondary text-black font-bold text-sm mt-10 mx-auto"}
        ></Button>
      </InternalLink>
      <div className="mx-auto my-16 block h-[2px] w-10 bg-light select-none"></div>
      <div className="grid grid-cols-4 gap-10">
        <div className="relative flex items-center">
          <h3 className="text-3xl font-bold uppercase italic text-secondary">
            Graphisme /<br></br>Photos
          </h3>
          <img
            src="src/assets/images/ornement-3.svg"
            alt="décoration"
            className="absolute bottom-0 right-0 h-20 select-none"
          />
        </div>
        {photoServices.map((service, index) => (
          <Card>
            <img
              src={`src/assets/images/${service.image}`}
              alt={service.title}
              className="h-10 w-10 select-none"
            />
            <div>
              <h3 className="mb-2 text-lg/5 font-bold uppercase text-secondary">
                {service.title}
              </h3>
              <Text>{service.description}</Text>
            </div>
            <span className="absolute bottom-0 right-0 flex h-7 w-10 select-none items-end justify-center bg-primary text-xl text-white">
              {`${(index + 1).toString().padStart(2, "0")}.`}
            </span>
          </Card>
        ))}
      </div>
      <InternalLink section={'contact'}>
        <Button
          text={"Transforme ton image dès maintenant!"}
          css={"bg-secondary text-black font-bold text-sm mt-10 mx-auto"}
        ></Button>
      </InternalLink>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="shadow-card relative flex items-center gap-5 p-5 pb-8">{children}</div>
  );
}
