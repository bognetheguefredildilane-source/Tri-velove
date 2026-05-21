import { FaShieldAlt } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

export const features = [
    {
        id: "01",
        title: "Sélection Premium",
        description: "Découvrez un parc automobile rigoureusement sélectionné. Des citadines élégantes aux SUV spacieux, chaque voiture est inspectée pour vous garantir un confort absolu et une sécurité maximale sur la route.",
        buttonText: "Explorer"
    },
    {
        id: "02",
        title: "Service Sur-Mesure",
        description: "Notre équipe d'experts vous accompagne à chaque étape pour dénicher la voiture qui correspond parfaitement à vos besoins et à votre budget. Profitez de conseils personnalisés et transparents.",
        buttonText: "En savoir plus"
    },
    {
        id: "03",
        title: "Achat Simple & Rapide",
        description: "Repartez au volant de votre nouvelle voiture sans tracas administratifs. Nos processus de transaction et de livraison sont optimisés pour être aussi rapides, fluides et sécurisés que possible.",
        buttonText: "Nous contacter"
    }
];

export const carPhotos = [
  {
    id: 1,
    title: "Toyota RAV4 2006 AWD",
    slug: "toyota-rav4-2006",
    category: "SUV",
    src: "/image/2006 Toyota RAV4 200 AWD 5 Door.jpeg",
    alt: "Vue arrière d'un Toyota RAV4 2006 de couleur beige/champagne, version 5 portes AWD",
    price: "6 500 000 XAF",
    details: {
      brand: "Toyota",
      model: "RAV4",
      year: 2006,
      type: "AWD"
    }
  },
  {
    id: 2,
    title: "Toyota Hilux Double Cabine",
    slug: "toyota-hilux-double-cabine",
    category: "Pick-up",
    src: "/image/download (19).jpeg",
    alt: "Toyota Hilux pick-up double cabine vert foncé avec finitions chromées",
    price: "7 500 000 XAF",
    details: {
      brand: "Toyota",
      model: "Hilux",
      year: 2004,
      type: "4x4"
    }
  },
  {
    id: 3,
    title: "Toyota RAV4 Phase 2",
    slug: "toyota-rav4-phase-2",
    category: "SUV",
    src: "/image/Toyota Rav4     One of my favorite norm_ cars.jpeg",
    alt: "Vue avant d'un Toyota RAV4 gris métallisé stationné au bord de l'eau",
    price: "8 500 000 XAF",
    details: {
      brand: "Toyota",
      model: "RAV4",
      year: 2009,
      type: "SUV"
    }
  },
  {
    id: 4,
    title: "BMW X5 2020 M Sport",
    slug: "bmw-x5-2020-white",
    category: "SUV",
    src: "/image/Wheelsage.jpeg",
    alt: "BMW X5 de 2020 blanc avec pack M Sport et calandre noire",
    price: "45 000 000 XAF",
    details: {
      brand: "BMW",
      model: "X5",
      year: 2020,
      trim: "M Sport"
    }
  },
  {
    id: 5,
    title: "BMW Série 3 Berline (F30)",
    slug: "bmw-serie-3-f30-white",
    category: "Berline",
    src: "/image/download (18).jpeg",
    alt: "Vue de face d'une BMW Série 3 blanche, génération F30 avec plaque d'immatriculation allemande",
    price: "11 000 000 XAF",
    details: {
      brand: "BMW",
      model: "Série 3",
      year: 2015,
      trim: "Standard"
    }
  },
  {
    id: 6,
    title: "BMW Série 3 Gran Turismo 2014",
    slug: "bmw-3-series-gt-2014",
    category: "Berline / GT",
    src: "/image/2014 BMW 3-Series Gran Turismo Images Leaked.jpeg",
    alt: "Vue avant d'une BMW Série 3 Gran Turismo grise de 2014",
    price: "9 500 000 XAF",
    details: {
      brand: "BMW",
      model: "Série 3 GT",
      year: 2014,
      trim: "Gran Turismo"
    }
  },
  {
    id: 7,
    title: "BMW X5 xDrive Luxe",
    slug: "bmw-x5-xdrive-luxe",
    category: "SUV",
    src: "/image/BMW X5.jpeg",
    alt: "BMW X5 blanc, finition xDrive avec jantes en alliage d'origine",
    price: "38 000 000 XAF",
    details: {
      brand: "BMW",
      model: "X5",
      year: 2019,
      trim: "xDrive Line"
    }
  },
  {
    id: 8,
    title: "Toyota Hilux Double Cabine 1997",
    slug: "toyota-hilux-double-cab-1997",
    category: "Pick-up",
    src: "/image/hulix.jpeg",
    alt: "Toyota Hilux double cabine vert sapin, modèle AU-spec produit entre 1997 et 2001",
    price: "4 500 000 XAF",
    details: {
      brand: "Toyota",
      model: "Hilux",
      year: 1999,
      type: "4x4 Pick-up"
    }
  },
  {
    id: 9,
    title: "Toyota Yaris Phase 2 Gris",
    slug: "toyota-yaris-grey-5door",
    category: "Citadine",
    src: "/image/Toyota Yaris (1).jpeg",
    alt: "Toyota Yaris 5 portes gris métallisé, vue de trois-quarts avant",
    price: "3 800 000 XAF",
    details: {
      brand: "Toyota",
      model: "Yaris",
      year: 2008,
      type: "Compact"
    }
  },
  {
    id: 10,
    title: "Toyota Yaris Phase 2 Rouge",
    slug: "toyota-yaris-red-5door",
    category: "Citadine",
    src: "/image/Toyota Yaris.jpeg",
    alt: "Toyota Yaris 5 portes de couleur rouge vif, garée en extérieur",
    price: "3 900 000 XAF",
    details: {
      brand: "Toyota",
      model: "Yaris",
      year: 2009,
      type: "Compact"
    }
  },
  {
    id: 11,
    title: "Toyota Yaris 2010 Bleu",
    slug: "toyota-yaris-blue-2010",
    category: "Citadine",
    src: "/image/Toyota Yaris 2009-11.jpeg",
    alt: "Toyota Yaris bleue (génération 2009-2011) stationnée devant un bâtiment moderne",
    price: "4 200 000 XAF",
    details: {
      brand: "Toyota",
      model: "Yaris",
      year: 2010,
      type: "Compact"
    }
  },
  {
    id: 12,
    title: "Toyota Yaris Phase 1 (3 portes)",
    slug: "toyota-yaris-p1-red-3door",
    category: "Citadine",
    src: "/image/download (23).jpeg",
    alt: "Toyota Yaris première génération rouge en version 3 portes, immatriculée en Pologne",
    price: "2 500 000 XAF",
    details: {
      brand: "Toyota",
      model: "Yaris",
      year: 2001,
      type: "Citadine"
    }
  },
  {
    id: 13,
    title: "Toyota Corolla Verso Phase 2",
    slug: "toyota-corolla-verso-silver",
    category: "Monospace",
    src: "/image/download (22).jpeg",
    alt: "Vue de trois-quarts arrière d'une Toyota Corolla Verso gris métallisé",
    price: "4 800 000 XAF",
    details: {
      brand: "Toyota",
      model: "Corolla Verso",
      year: 2005,
      type: "Monospace"
    }
  },
  {
    id: 14,
    title: "Mercedes-Benz R63 AMG",
    slug: "mercedes-r63-amg-silver",
    category: "Monospace / Break de luxe",
    src: "/image/Mercedes-Seite - Der private Weblog für Freunde der Marke Mercedes-Benz.jpeg",
    alt: "Mercedes-Benz Classe R 63 AMG gris argenté, le monospace de performance de 507 chevaux",
    price: "12 000 000 XAF",
    details: {
      brand: "Mercedes-Benz",
      model: "Classe R 63 AMG",
      year: 2007,
      type: "Performance"
    }
  },
  {
    id: 15,
    title: "Toyota Hilux Revo GR Sport",
    slug: "toyota-hilux-revo-gr-sport",
    category: "Pick-up",
    src: "/image/download (25).jpeg",
    alt: "Toyota Hilux Revo blanc avec finitions sportives Gazoo Racing (GR Sport) et stickers latéraux",
    price: "28 000 000 XAF",
    details: {
      brand: "Toyota",
      model: "Hilux Revo",
      year: 2022,
      type: "4x4 Sport"
    }
  },
  {
    id: 16,
    title: "Toyota Echo Hatchback (5 portes)",
    slug: "toyota-echo-red-5door",
    category: "Citadine",
    src: "/image/download (24).jpeg",
    alt: "Toyota Echo rouge (nom de la Yaris sur certains marchés comme l'Australie) en version 5 portes sur route",
    price: "2 800 000 XAF",
    details: {
      brand: "Toyota",
      model: "Echo",
      year: 2003,
      type: "Citadine"
    }
  },
  {
    id: 17,
    title: "Audi S5 Coupé Bleu",
    slug: "audi-s5-coupe-blue",
    category: "Coupé",
    src: "/image/New Audi Cars for Sale in Austin _ Audi North Austin.jpeg",
    alt: "Audi S5 Coupé bleu électrique, vue de trois-quarts avant sur fond blanc",
    price: "22 000 000 XAF",
    details: {
      brand: "Audi",
      model: "S5 Coupé",
      year: 2020,
      type: "Sport"
    }
  },
  {
    id: 18,
    title: "Audi SQ5 ABT Sportsline",
    slug: "audi-sq5-abt-white",
    category: "SUV",
    src: "/image/download (32).jpeg",
    alt: "Audi SQ5 blanc préparé par ABT avec jantes noires personnalisées, stationné en montagne par temps nuageux",
    price: "25 000 000 XAF",
    details: {
      brand: "Audi",
      model: "SQ5",
      year: 2019,
      type: "SUV Premium"
    }
  },
  {
    id: 19,
    title: "Hyundai Grand i10 Nios Bleu",
    slug: "hyundai-grand-i10-nios-blue",
    category: "Citadine",
    src: "/image/Pin on Hatchback.jpeg",
    alt: "Hyundai Grand i10 Nios bleu canard, modèle hatchback compact",
    price: "6 500 000 XAF",
    details: {
      brand: "Hyundai",
      model: "Grand i10 Nios",
      year: 2021,
      type: "Citadine"
    }
  },
  {
    id: 20,
    title: "Hyundai Grand i10 Nios Blanc",
    slug: "hyundai-grand-i10-nios-white",
    category: "Citadine",
    src: "/image/Hyundai Grand i10 Nios.jpeg",
    alt: "Hyundai Grand i10 Nios blanc, vue de trois-quarts avant sur fond blanc",
    price: "6 500 000 XAF",
    details: {
      brand: "Hyundai",
      model: "Grand i10 Nios",
      year: 2021,
      type: "Citadine"
    }
  },
  {
    id: 21,
    title: "Audi Q2 Rouge",
    slug: "audi-q2-red",
    category: "SUV / Crossover",
    src: "/image/Audi Q2.jpeg",
    alt: "Audi Q2 rouge vif avec toit noir, crossover compact urbain",
    price: "15 000 000 XAF",
    details: {
      brand: "Audi",
      model: "Q2",
      year: 2020,
      type: "Crossover"
    }
  },
  {
    id: 22,
    title: "Audi RS5 Sportback Bleu",
    slug: "audi-rs5-sportback-blue",
    category: "Berline / Coupé 5 portes",
    src: "/image/Audi RS5.jpeg",
    alt: "Audi RS5 Sportback bleu performance, berline sportive haut de gamme",
    price: "35 000 000 XAF",
    details: {
      brand: "Audi",
      model: "RS5 Sportback",
      year: 2021,
      type: "Sport"
    }
  },
  {
    id: 23,
    title: "Nissan Frontier Crew Cab Blanc",
    slug: "nissan-frontier-crew-cab-white",
    category: "Pick-up",
    src: "/image/Nissan Frontier.jpeg",
    alt: "Nissan Frontier double cabine blanc avec barres de toit et finitions chromées",
    price: "13 500 000 XAF",
    details: {
      brand: "Nissan",
      model: "Frontier",
      year: 2016,
      type: "4x4 Pick-up"
    }
  },
  {
    id: 24,
    title: "Toyota Fortuner 2022",
    slug: "toyota-fortuner-2022-white",
    category: "SUV",
    src: "/image/รุ่นและราคา Toyota Fortuner 2022 โฉมใหม่ และรุ่นพิเศษ Legender.jpeg",
    alt: "Toyota Fortuner modèle 2022 blanc, SUV familial basé sur le châssis du Hilux",
    price: "32 000 000 XAF",
    details: {
      brand: "Toyota",
      model: "Fortuner",
      year: 2022,
      type: "SUV 7 Places"
    }
  },
  {
    id: 25,
    title: "Toyota SW4 Diamond",
    slug: "toyota-sw4-diamond-white",
    category: "SUV",
    src: "/image/Toyota SW4 Diamond.jpeg",
    alt: "Toyota SW4 Diamond (nom du Fortuner sur le marché sud-américain) blanc avec toit noir bi-ton",
    price: "36 000 000 XAF",
    details: {
      brand: "Toyota",
      model: "SW4 Diamond",
      year: 2023,
      type: "SUV Premium"
    }
  },
  {
    id: 26,
    title: "Nissan Navara Double Cabine ",
    slug: "nissan-navara-brown-topview",
    category: "Pick-up",
    src: "/image/download (40).jpeg",
    alt: "Vue aérienne d'un Nissan Navara marron métallisé avec benne ouverte sur un chemin de terre",
    price: "16 500 000 XAF",
    details: {
      brand: "Nissan",
      model: "Navara",
      year: 2019,
      type: "4x4 Pick-up"
    }
  },
  {
    id: 27,
    title: "Nissan Navara NP300 King Cab",
    slug: "nissan-navara-np300-silver",
    category: "Pick-up",
    src: "/image/download (39).jpeg",
    alt: "Vue trois-quarts arrière d'un Nissan Navara NP300 gris d'usine avec benne vide",
    price: "14 000 000 XAF",
    details: {
      brand: "Nissan",
      model: "Navara NP300",
      year: 2018,
      type: "King Cab"
    }
  },
  {
    id: 28,
    title: "Nissan Nova Frontier",
    slug: "nissan-nova-frontier-white",
    category: "Pick-up",
    src: "/image/download (38).jpeg",
    alt: "Nissan Nova Frontier blanc, pick-up double cabine robuste",
    price: "12 000 000 XAF",
    details: {
      brand: "Frontier",
      model: "Frontier",
      year: 2015,
      type: "4x4 Pick-up"
    }
  },
  {
    id: 29,
    title: "Nissan Murano Orange",
    slug: "nissan-murano-orange",
    category: "SUV",
    src: "/image/IMGBIN_com - Download Transparent PNG Images, For Free.jpeg",
    alt: "Nissan Murano de couleur orange cuivré, SUV moderne détouré sur fond transparent",
    price: "15 500 000 XAF",
    details: {
      brand: "Nissan",
      model: "Murano",
      year: 2019,
      type: "SUV"
    }
  },
  {
    id: 30,
    title: "Nissan Altima Blanc",
    slug: "nissan-altima-white",
    category: "Berline",
    src: "/image/Nissan.jpeg",
    alt: "Nissan Altima berline blanche, vue de trois-quarts avant sur fond blanc uni",
    price: "12 500 000 XAF",
    details: {
      brand: "Nissan",
      model: "Altima",
      year: 2020,
      type: "Berline"
    }
  },
  {
    id: 31,
    title: "Nissan Maxima Blanc",
    slug: "nissan-maxima-white",
    category: "Berline",
    src: "/image/Temecula Nissan _ Premier Nissan Dealership in Temecula, CA - New & Used Cars, Expert Service.jpeg",
    alt: "Nissan Maxima blanc stationné sur une route goudronnée en bordure d'un parc arboré",
    price: "14 000 000 XAF",
    details: {
      brand: "Nissan",
      model: "Maxima",
      year: 2018,
      type: "Berline Premium"
    }
  },
  {
    id: 32,
    title: "Hyundai Kona Gris Sensation",
    slug: "hyundai-kona-grey",
    category: "SUV / Crossover",
    src: "/image/New Hyundai For Sale in North Plainfield, NJ _ Global Hyundai.jpeg",
    alt: "Hyundai Kona gris foncé métallisé avec jantes noires et étrier de frein rouge personnalisé",
    price: "13 500 000 XAF",
    details: {
      brand: "Hyundai",
      model: "Kona",
      year: 2020,
      type: "Crossover"
    }
  },
  {
    id: 33,
    title: "Nissan Navara Gris N-Guard",
    slug: "nissan-navara-grey-premium",
    category: "Pick-up",
    src: "/image/download (34).jpeg",
    alt: "Nissan Navara double cabine gris mat avec jantes et finitions noires, édition haut de gamme",
    price: "21 000 000 XAF",
    details: {
      brand: "Nissan",
      model: "Navara",
      year: 2021,
      type: "4x4 Pick-up"
    }
  },
  {
    id: 34,
    title: "Nissan Navara Orange King Cab",
    slug: "nissan-navara-orange-kingcab",
    category: "Pick-up",
    src: "/image/download (33).jpeg",
    alt: "Nissan Navara cabine approfondie (King Cab) orange cuivré, détouré sur fond transparent",
    price: "13 000 000 XAF",
    details: {
      brand: "Nissan",
      model: "Navara",
      year: 2017,
      type: "King Cab"
    }
  }
];