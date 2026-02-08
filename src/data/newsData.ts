import hamiltonFerrariNews from "../assets/images/hammilton_ferrari.png";
import astonMartinNews from "../assets/images/aston_martin-news.png";
import motoGpNews from "../assets/images/motoGp_news.png";

export const news = [
  {
    id: 1,
    cat: "FORMULE 1",
    type: "TECH_ANALYSIS",
    title: "L'Ère Hamilton-Ferrari : Premier roulage à Fiorano",
    image: hamiltonFerrariNews,
    desc: "Lewis Hamilton a effectué ses premiers tours de roue officiels avec la Scuderia Ferrari, marquant le début du transfert le plus attendu de l'histoire du sport automobile.",
    date: "03.02.26",
    tags: ["Scuderia_Ferrari", "Circuit_Fiorano", "Technique", "Hamilton"], 
    dossier: {
      title: "ANALYSE : LE CHOC ROUGE",
      content: "Après 12 saisons chez Mercedes, Lewis Hamilton a enfin pris les commandes de la Ferrari SF-26 (nom de code Project 677). Les premiers retours indiquent un travail massif sur l'intégration du système hybride haute performance de 2026. L'attention se porte sur l'aileron arrière actif (Active Aero), crucial pour compenser la perte de puissance thermique au profit de l'électrique. La Scuderia a investi plus de 450 millions d'euros dans son nouveau département moteur pour garantir à Hamilton une monoplace capable de décrocher son 8ème titre mondial dès cette saison de transition.",
      specs: ["Moteur: V6 Turbo Hybride", "Power: ~1000 hp", "E-Power Ratio: 50/50"],
      externalLinks: [
        { name: "Scuderia Ferrari News", url: "https://www.ferrari.com/en-EN/formula1" },
        { name: "F1 Analysis", url: "https://www.formula1.com" }
      ]
    }
  },
  {
    id: 2,
    cat: "WEC / HYPERCAR",
    type: "ENDURANCE_LOG",
    title: "Aston Martin Valkyrie : Le Mans en ligne de mire",
    image: astonMartinNews,
    desc: "Le prototype Valkyrie LMH a terminé ses tests d'endurance de 24 heures à Portimão sans aucun problème mécanique majeur.",
    date: "02.02.26",
    tags: ["Aston_Martin", "Heart_Of_Racing", "Circuit_Portimão", "V12_Tech"],
    dossier: {
      title: "V12 ATMOSPHÉRIQUE : LE RETOUR DU ROI",
      content: "Contrairement à la majorité de la grille Hypercar utilisant des V6 ou V8 turbo, Aston Martin aligne un V12 atmosphérique de 6,5 litres développé avec Cosworth. Ce moteur, adapté du modèle de route, a été limité par la BoP (Balance of Performance) à 680 chevaux, mais son couple et sa sonorité redéfinissent la catégorie. L'aéro est dépourvue d'aileron arrière massif, utilisant un diffuseur arrière soufflé révolutionnaire. L'équipe Heart of Racing gérera l'engagement officiel, visant une victoire historique face à Toyota, Ferrari et Porsche lors de l'édition 2026 des 24 Heures du Mans.",
      specs: ["Moteur: 6.5L V12 Cosworth", "Poids: 1030 kg", "RPM Limit: 11,000"],
      externalLinks: [
        { name: "WEC Official Site", url: "https://www.fiawec.com" },
        { name: "Aston Martin Racing", url: "https://www.astonmartin.com/en/our-world/aston-martin-racing" }
      ]
    }
  },
  {
    id: 3,
    cat: "MOTO GP",
    type: "FACTORY_INTEL",
    title: "BMW M 1000 RR : Entrée confirmée en MotoGP 2027",
    image: motoGpNews,
    desc: "Le constructeur bavarois a officiellement racheté les données de Suzuki pour accélérer le développement de son prototype 850cc.",
    date: "01.02.26",
    tags: ["BMW_M", "Technique", "R&D_Bavaria", "MotoGP_2027"],
    dossier: {
      title: "PROJET BYERN-POWER : M-MOTOGP",
      content: "La rumeur est devenue réalité : BMW rejoindra la grille MotoGP dès le changement de réglementation 2027. Le prototype actuel utilise un quatre cylindres en ligne calé à 270°, une architecture proche de la Yamaha M1 mais avec une gestion électronique héritée du Superbike mondial où BMW domine actuellement. Le défi majeur réside dans l'aérodynamique mobile, une zone grise du règlement que BMW compte exploiter avec ses ingénieurs issus de la division M Performance. Des tests privés avec Toprak Razgatlıoğlu sont prévus à Jerez dès le mois prochain.",
      specs: ["Cylindrée: 850cc (Reg. 2027)", "Poids: 153 kg", "Top Speed Target: 355 km/h"],
      externalLinks: [
        { name: "MotoGP News", url: "https://www.motogp.com" },
        { name: "BMW Motorrad", url: "https://www.bmw-motorrad.com" }
      ]
    }
  }
];