import React from "react";
import Text from "./Text";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-light grid grid-cols-3 items-start gap-10 p-20">
      <div className="grid text-center">
        <img
          src="src/assets/images/certified.png"
          alt="expertise sur mesure"
          className="mx-auto h-12"
        />
        <h3 className="text-xl mb-2 mt-3 uppercase font-bold">Une expertise sur mesure</h3>
        <Text>
          Je personnalise ta stratégie en fonction de ton secteur d’activité. Je
          prends en compte tes objectifs pour une visibilité optimale.
        </Text>
      </div>
      <div className="grid text-center">
        <img
          src="src/assets/images/chrono.png"
          alt="temps"
          className="mx-auto h-12"
        />
        <h3 className="text-xl mb-2 mt-3 uppercase font-bold">Temps économisé</h3>
        <Text>
          La gestion des réseaux sociaux peut vite devenir chronophage. Mes
          services pourront te permettre de mieux te concentrer sur ton
          activité.
        </Text>
      </div>
      <div className="grid text-center">
        <img
          src="src/assets/images/analytic.png"
          alt="analyse et optimisation"
          className="mx-auto h-12"
        />
        <h3 className="text-xl mb-2 mt-3 uppercase font-bold">Analyse et optimisation</h3>
        <Text>
          Laisse-moi analyser les données et ajuster ta stratégie en fonction
          des résultats. Nous améliorerons ta présence en ligne pour atteindre
          des sommets.
        </Text>
      </div>
    </section>
  );
}
