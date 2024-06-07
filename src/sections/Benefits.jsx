import React from "react";
import Text from "../components/Text";
import { useMobileMenu } from "../utils/MobileMenuContext";

export default function Benefits() {
  const { isMobile } = useMobileMenu();

  return (
    <section id="benefits" className="bg-light">
      <div className="max-w-responsive mx-auto overflow-x-scroll hide-scrollbar grid sm:grid-cols-3 items-start gap-20 sm:gap-10 px-10 py-20 sm:p-20">
        <div className="grid text-center disable-animation" data-aos={isMobile ? 'fade-right' : null}>
          <img
            src="assets/images/certified.png"
            alt="expertise sur mesure"
            className="mx-auto h-12 w-12 select-none"
          />
          <h3 className="text-xl mb-2 mt-3 uppercase font-bold">Une expertise sur mesure</h3>
          <Text>
            Je personnalise ta stratégie en fonction de ton secteur d’activité. Je
            prends en compte tes objectifs pour une visibilité optimale.
          </Text>
        </div>
        <div className="grid text-center disable-animation" data-aos={isMobile ? 'fade-left' : null}>
          <img
            src="assets/images/chrono.png"
            alt="temps"
            className="mx-auto h-12 w-12 select-none"
          />
          <h3 className="text-xl mb-2 mt-3 uppercase font-bold">Temps économisé</h3>
          <Text>
            La gestion des réseaux sociaux peut vite devenir chronophage. Mes
            services pourront te permettre de mieux te concentrer sur ton
            activité.
          </Text>
        </div>
        <div className="grid text-center disable-animation" data-aos={isMobile ? 'fade-right' : null}>
          <img
            src="assets/images/analytic.png"
            alt="analyse et optimisation"
            className="mx-auto h-12 w-12 select-none"
          />
          <h3 className="text-xl mb-2 mt-3 uppercase font-bold">Analyse et optimisation</h3>
          <Text>
            Laisse-moi analyser les données et ajuster ta stratégie en fonction
            des résultats. Nous améliorerons ta présence en ligne pour atteindre
            des sommets.
          </Text>
        </div>
      </div>
    </section>
  );
}
