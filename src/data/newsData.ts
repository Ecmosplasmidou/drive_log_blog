import hamiltonFerrariNews from "../assets/images/hammilton_ferrari.png";
import astonMartinNews from "../assets/images/aston_martin-news.png";
import motoGpNews from "../assets/images/motoGp_news.png";

export const news = [
  {
    id: 1,
    cat: "FORMULE 1",
    type: "TECH_ANALYSIS",
    title: "L'Ère Hamilton-Ferrari : Premier roulage à Fiorano",
    image: "hamiltonFerrariNews",
    desc: "Lewis Hamilton a effectué ses premiers tours de roue officiels avec la Scuderia Ferrari, marquant le début du transfert le plus attendu de l'histoire.",
    date: "15.02.26",
    tags: ["Scuderia_Ferrari", "Hamilton", "F1_2026", "Technique"],
    dossier: {
      title: "ANALYSE : LE CHOC ROUGE ET LE DÉFI DU MGU-K",
      content: "L'intégration de Lewis Hamilton à Maranello dépasse le simple cadre sportif. Lors de ce premier roulage sur la SF-26 (Projet 677), l'accent a été mis sur l'ergonomie du cockpit et la gestion du nouveau volant complexe imposé par la réglementation 2026. Techniquement, la monoplace abandonne le MGU-H pour se concentrer sur un MGU-K triplé en puissance (350kW). Hamilton a dû adapter son style de pilotage à l'Active Aero : les ailerons basculent en 'Angle d'Attaque Minimum' (Mode X) dès que les capteurs détectent une accélération latérale inférieure à 0.5G en ligne droite. La télémétrie montre déjà une interaction fine entre le septuple champion et Loïc Serra (ex-Mercedes), confirmant que la Ferrari pourrait être la référence en gestion d'énergie dès Melbourne.",
      specs: ["Moteur: V6 Turbo Hybride 1.6L", "E-Power: 350kW (475hp)", "Carburant: 100% Synthétique Aramco"],
      externalLinks: [{ name: "Ferrari F1 Tech", url: "https://www.ferrari.com/en-EN/formula1" }]
    }
  },
  {
    id: 2,
    cat: "WEC / HYPERCAR",
    type: "ENDURANCE_LOG",
    title: "Aston Martin Valkyrie : Le Mans en ligne de mire",
    image: "astonMartinNews",
    desc: "Le prototype Valkyrie LMH a terminé ses tests d'endurance de 24 heures à Portimão sans aucun problème mécanique majeur.",
    date: "12.02.26",
    tags: ["Aston_Martin", "V12_Cosworth", "WEC", "LeMans"],
    dossier: {
      title: "V12 ATMOSPHÉRIQUE : L'EXCEPTION CULTURELLE",
      content: "Alors que la concurrence (Toyota, Porsche, Ferrari) mise sur l'hybridation complexe et le downsizing, Aston Martin fait trembler le paddock avec son V12 atmosphérique de 6,5L. Développé par Cosworth, ce bloc est une prouesse d'ingénierie : il atteint les 680 chevaux imposés par la BoP tout en conservant une courbe de couple extrêmement linéaire, facilitant la motricité en sortie de virage lent. Le défi majeur de l'équipe Heart of Racing réside dans la gestion thermique de ce bloc massif sous le capot arrière étroit. À Portimão, la Valkyrie a affiché une consommation de pneus 15% inférieure à la moyenne grâce à une aérodynamique passive qui génère de l'appui via des tunnels Venturi géants, limitant ainsi le besoin d'ailerons à forte traînée.",
      specs: ["Moteur: V12 6.5L NA", "RPM Limit: 11,000", "Châssis: Monocoque Carbone"],
      externalLinks: [{ name: "FIA WEC News", url: "https://www.fiawec.com" }]
    }
  },
  {
    id: 3,
    cat: "MOTO GP",
    type: "FACTORY_INTEL",
    title: "BMW M 1000 RR : Entrée confirmée en MotoGP 2027",
    image: "motoGpNews",
    desc: "Le constructeur bavarois a officiellement racheté les données de Suzuki pour accélérer le développement de son prototype 850cc.",
    date: "10.02.26",
    tags: ["BMW_M", "MotoGP_2027", "850cc", "Bavaria_Tech"],
    dossier: {
      title: "STRATÉGIE M-POWER : LE 850CC BAVAROIS",
      content: "BMW Motorrad ne cache plus ses ambitions. En rachetant la propriété intellectuelle des moteurs quatre cylindres en ligne de Suzuki (GSX-RR), BMW s'offre un raccourci technologique de trois ans. Le prototype 2027, actuellement en test en soufflerie à Munich, explore des solutions d'aérodynamique variable interdites en WSBK mais autorisées par les nouvelles directives MotoGP. L'ingénierie se concentre sur un système de refroidissement des pneus via des conduits en carbone intégrés au bras oscillant. Côté électronique, BMW utilise l'IA pour prédire le grip en temps réel, une technologie issue de leur département automobile M. Toprak Razgatlıoğlu a déjà bouclé 500 tours sur une version hybride d'essai, affichant des chronos à seulement 0.8s des records officiels de Jerez.",
      specs: ["Cylindrée: 850cc", "Poids: 153kg", "Électronique: Magneti Marelli EVO"],
      externalLinks: [{ name: "MotoGP Official", url: "https://www.motogp.com" }]
    }
  },
  {
    id: 4,
    cat: "FORMULE 1",
    type: "ENGINE_INTEL",
    title: "Audi F1 : Les secrets de l'unité de puissance de Neubourg",
    image: "audiF1News",
    desc: "Audi dévoile les premiers chiffres de son unité de puissance alors que les tests au banc d'essai s'intensifient.",
    date: "08.02.26",
    tags: ["Audi_Sport", "Neubourg", "Moteur_2026", "Sauber"],
    dossier: {
      title: "L'ALLEMAGNE REVIENT DANS LA COURSE",
      content: "Contrairement à Red Bull-Ford qui a rencontré des soucis de vibration, Audi semble avoir stabilisé son vilebrequin à haute vitesse. L'unité de puissance allemande utilise une technologie de batterie à haute densité énergétique développée conjointement avec le projet e-tron de route. Le défi de 2026 est la gestion de la 'décharge sauvage' : comment fournir 350kW de puissance électrique tout au long de la ligne droite sans vider la batterie avant le freinage ? Audi a développé un logiciel de gestion prédictive (Predictive Energy Management) qui utilise le GPS du circuit pour cartographier le déploiement. Sauber, qui devient l'écurie d'usine, a déjà adapté sa soufflerie d'Hinwil pour tester l'intégration des radiateurs massifs nécessaires au refroidissement de l'onduleur électrique.",
      specs: ["Batterie: 800V Architecture", "MGU-K: 350kW", "Refroidissement: Liquide Diélectrique"],
      externalLinks: [{ name: "Audi Sport F1", url: "https://www.audi-sport.com" }]
    }
  },
  {
    id: 5,
    cat: "TECH & FUTURE",
    type: "SUSTAINABILITY",
    title: "E-Fuels : La révolution chimique de 2026 est là",
    image: "efuelNews",
    desc: "Le passage au carburant 100% durable change la donne pour la combustion interne en compétition.",
    date: "05.02.26",
    tags: ["E-Fuel", "Aramco", "Decarbonization", "F1_2026"],
    dossier: {
      title: "LA MOLÉCULE MAGIQUE",
      content: "Ce n'est pas du biocarburant classique (issu de la biomasse), mais du carburant de synthèse (e-fuel). Le procédé capture le CO2 atmosphérique et le combine avec de l'hydrogène produit par électrolyse renouvelable. Pour les ingénieurs motoristes, c'est un casse-tête : l'e-fuel a une densité énergétique légèrement différente de l'essence fossile, ce qui nécessite de revoir totalement l'injection directe et les chambres de combustion. Cependant, ce carburant a un indice d'octane supérieur à 100, ce qui permet des taux de compression plus élevés sans cliquetis. C'est la clé qui permet à la F1 et au WEC de rester 'thermiques' tout en affichant un bilan carbone neutre, une étape vitale pour l'acceptabilité sociale des sports mécaniques.",
      specs: ["CO2 Capture: Direct Air Capture", "Octane: 102 RON", "Emissions: Net Zero"],
      externalLinks: [{ name: "Aramco Innovation", url: "https://www.aramco.com" }]
    }
  },
  {
    id: 6,
    cat: "MOTO GP",
    type: "TECH_LOG",
    title: "Aéro MotoGP : La guerre des 'Ground Effects' s'intensifie",
    image: "motoGpaeroNews",
    desc: "Ducati et Aprilia testent des carénages inférieurs capables de générer un effet de sol même à haute inclinaison.",
    date: "03.02.26",
    tags: ["Ducati_Corse", "Aprilia_Racing", "Aérodynamique", "Gigi_DallIgna"],
    dossier: {
      title: "ASPIRÉ PAR LE BITUME",
      content: "La saison 2026 marque un tournant dans l'utilisation de l'effet de sol sur deux roues. Aprilia a introduit un 'carénage à marchepied' qui crée une zone de basse pression sous la moto lorsqu'elle est inclinée à plus de 50 degrés. Cela permet de stabiliser la machine sans augmenter la traînée. Ducati a répliqué avec des extracteurs d'air situés derrière la roue avant qui redirigent le flux vers les diffuseurs latéraux. L'enjeu est de limiter l'usure du pneu avant, qui surchauffe à cause de l'appui excessif. Les pilotes rapportent une sensation de 'rail' en virage, mais une difficulté accrue pour modifier la trajectoire en cas d'erreur, rendant le pilotage plus physique que jamais.",
      specs: ["Appui: +45kg à 200km/h", "Inclinaison max: 64°", "Ailerons: Carbone multi-plans"],
      externalLinks: [{ name: "Ducati Corse News", url: "https://www.ducati.com/it/it/racing/motogp" }]
    }
  },
  {
    id: 7,
    cat: "FORMULE 1",
    type: "DRIVER_LOG",
    title: "Max Verstappen et le projet Red Bull-Ford",
    image: "verstappenNews",
    desc: "Des rumeurs de tensions émergent concernant la puissance moteur du futur bloc Red Bull Powertrains.",
    date: "01.02.26",
    tags: ["Max_Verstappen", "RedBull_Racing", "Ford", "Market_Transfer"],
    dossier: {
      title: "LE PARI DE MILTON KEYNES",
      content: "Pour la première fois de son histoire, Red Bull construit son propre moteur avec le soutien de Ford. Cependant, les rapports internes suggèrent que le moteur électrique rencontre des problèmes de fiabilité lors des cycles de charge rapide. Max Verstappen, dont le contrat comporte des clauses de performance liées à l'unité de puissance, suit de près les progrès. Si Red Bull ne parvient pas à égaler la puissance d'Audi ou Ferrari d'ici les tests de Bahreïn, le champion néerlandais pourrait activer sa clause de sortie. Ford injecte pourtant des millions dans la technologie des semi-conducteurs au carbure de silicium pour optimiser l'onduleur, espérant transformer ce projet en un succès marketing mondial.",
      specs: ["Moteur: RBPT-Ford", "Statut: Test Banc d'essai 4", "Pilote: Verstappen"],
      externalLinks: [{ name: "Red Bull Racing", url: "https://www.redbullracing.com" }]
    }
  },
  {
    id: 8,
    cat: "WEC / HYPERCAR",
    type: "NEW_ENTRY",
    title: "Alpine A424 : Le défi de l'endurance à la française",
    image: "alpineWecNews",
    desc: "L'écurie française peaufine son système hybride avant l'ouverture de la saison au Qatar.",
    date: "28.01.26",
    tags: ["Alpine_Racing", "Signatech", "Hypercar", "Mick_Schumacher"],
    dossier: {
      title: "L'APPAREILLAGE BLEU",
      content: "L'A424 repose sur un châssis Oreca et un V6 de 3,4L mono-turbo. Sa force réside dans son intégration logicielle. Mick Schumacher, pilote phare du projet, a souligné la facilité de pilotage de l'auto lors des relais de nuit. Alpine utilise une stratégie de récupération d'énergie agressive, permettant de recharger les batteries sur des freinages courts, là où les concurrents ont besoin de zones de freinage plus longues. Le bureau d'études de Viry-Châtillon a transféré ses compétences de la F1 pour optimiser le déploiement du moteur électrique de 200kW sur le train arrière. L'objectif est de jouer le podium face à Toyota dès la première année pleine d'exploitation.",
      specs: ["Moteur: V6 3.4L Turbo", "Hybride: Bosch E-Motor", "Poids: 1030 kg"],
      externalLinks: [{ name: "Alpine Racing", url: "https://www.alpinecars.com" }]
    }
  },
  {
    id: 9,
    cat: "FORMULE 1",
    type: "CIRCUIT_NEWS",
    title: "GP de Madrid : Un tracé hybride révolutionnaire",
    image: "madridGpNews",
    desc: "Le circuit de Madrid promet d'être le plus technologique du calendrier avec des zones de recharge par induction.",
    date: "25.01.26",
    tags: ["Madrid_GP", "IFEMA", "Urban_Circuit", "F1_2026"],
    dossier: {
      title: "PLUS QU'UN CIRCUIT, UN LABORATOIRE",
      content: "Le GP de Madrid, qui remplace Barcelone, propose un tracé de 5,47 km mêlant portions urbaines et zones permanentes. La grande innovation réside dans l'asphalte 'intelligent' sur la ligne droite de départ, capable de dissiper la chaleur des pneus plus rapidement. De plus, les infrastructures de l'IFEMA seront 100% alimentées par des panneaux solaires transparents. Sportivement, le virage 15 sera l'un des plus impressionnants de la saison avec une inclinaison de 18 degrés, forçant les écuries à concevoir des suspensions capables d'encaisser une charge verticale de 4G. Madrid veut devenir le 'Super Bowl' de la F1, mêlant divertissement et démonstration technologique de pointe.",
      specs: ["Longueur: 5.47 km", "Virages: 20", "Capacité: 110,000 spectateurs"],
      externalLinks: [{ name: "F1 Official News", url: "https://www.formula1.com" }]
    }
  },
  {
    id: 10,
    cat: "TECH & FUTURE",
    type: "AI_IN_RACING",
    title: "L'IA remplace-t-elle les ingénieurs de piste ?",
    image: "aiRacingNews",
    desc: "Les écuries de pointe utilisent désormais des modèles de langage Large Language Models (LLM) pour l'analyse de stratégie en temps réel.",
    date: "22.01.26",
    tags: ["IA", "Machine_Learning", "Strategie", "Big_Data"],
    dossier: {
      title: "LE STRATÈGE NUMÉRIQUE",
      content: "Fini les simples feuilles Excel pour la stratégie. En 2026, des équipes comme McLaren et Mercedes utilisent des agents IA capables d'analyser 100 millions de simulations par seconde pendant la course. Ces systèmes ingèrent les données météo, l'usure des pneus des concurrents et même la tonalité de la voix des pilotes à la radio pour détecter leur niveau de stress ou de fatigue. L'IA peut suggérer un 'undercut' avec une précision de 98%. Le rôle de l'ingénieur de piste évolue : il devient le 'validateur' de la décision suggérée par la machine. Cela soulève des débats éthiques sur l'importance du facteur humain, mais la quête du millième de seconde ne laisse aucune place au doute.",
      specs: ["Simulations: 10^8 / sec", "Cloud: AWS / Google Cloud", "Précision: 98.2%"],
      externalLinks: [{ name: "Tech in F1", url: "https://www.aws.amazon.com/f1" }]
    }
  }
];