"use client";
import { carPhotos } from "@/utils/data";
import React, { useRef } from 'react';
import { Params } from "next/dist/server/request/params";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import Link from "next/link";
import {
  FaRegCalendarAlt,
  FaShieldAlt,
  FaWhatsapp,
  FaPhone,
  FaChevronRight,
  FaUserCheck,
} from "react-icons/fa";
import { MdSpeed, MdLocalGasStation, MdCheckCircle, MdVerified } from "react-icons/md";




const equipmentByCategory: Record<string, string[]> = {
  SUV: [
    "Climatisation",
    "Jantes alliage",
    "Vitres électriques",
    "Caméra de recul",
    "Direction assistée",
    "Régulateur de vitesse",
    "Verrouillage centralisé",
    "Feux LED",
  ],
  "Pick-up": [
    "4x4 intégral",
    "Climatisation",
    "Barres de toit",
    "Crochet remorque",
    "Vitres électriques",
    "Boîte automatique",
    "Verrouillage centralisé",
    "Feux antibrouillard",
  ],
  Berline: [
    "Climatisation",
    "Intérieur cuir",
    "Vitres électriques",
    "Système audio",
    "Verrouillage centralisé",
    "Direction assistée",
    "Régulateur de vitesse",
    "Capteurs stationnement",
  ],
  Citadine: [
    "Climatisation",
    "Vitres électriques",
    "Verrouillage centralisé",
    "Direction assistée",
    "Bluetooth",
    "Feux antibrouillard",
    "Régulateur de vitesse",
    "Aide au stationnement",
  ],
  Coupé: [
    "Climatisation",
    "Intérieur cuir",
    "Toit ouvrant",
    "Jantes alliage",
    "Audio premium",
    "Verrouillage centralisé",
    "Caméra de recul",
    "Feux LED",
  ],
  Monospace: [
    "Climatisation",
    "7 Places",
    "Vitres électriques",
    "Verrouillage centralisé",
    "Direction assistée",
    "Bluetooth",
    "Régulateur de vitesse",
    "Barres de toit",
  ],
};

function getEquipment(category: string): string[] {
  for (const key of Object.keys(equipmentByCategory)) {
    if (category.toLowerCase().includes(key.toLowerCase())) {
      return equipmentByCategory[key];
    }
  }
  return [
    "Climatisation",
    "Vitres électriques",
    "Verrouillage centralisé",
    "Direction assistée",
    "Régulateur de vitesse",
    "Bluetooth",
    "Feux LED",
    "Aide au stationnement",
  ];
}

const page = ({ params }: { params: Params }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    const name = form.current.querySelector<HTMLInputElement>('[name="Nom"]')?.value;
    const email = form.current.querySelector<HTMLInputElement>('[name="email"]')?.value;
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{8,}$/;
    if (!name || !nameRegex.test(name)) {
      alert("Le nom n'est pas valide. Veuillez entrer un nom correct (lettres, espaces, tirets, apostrophes, au moins 8 caractères).");
      return;
    }
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      alert("L'adresse email n'est pas valide. Veuillez entrer une adresse email correcte.");
      return;
    }
    emailjs
      .sendForm("service_jwtka26", "template_p41j2ba", form.current, {
        publicKey: "unsjN6zYU5UfMECNI",
      })
      .then(
        () => {
          alert("Message envoyé avec succès !");
          console.log("SUCCESS!");
          form.current?.reset();
        },
        (error) => {
          alert("Une erreur s'est produite. Veuillez réessayer.");
          console.log("FAILED...", error.text);
        },
      );
  };

  const { slug } = React.use(params as unknown as Promise<{ slug: string | string[] }>);
  const slugStr = Array.isArray(slug) ? slug[0] : slug;
  const decodedSlug = slugStr ? decodeURIComponent(slugStr) : "";
  const car = decodedSlug
    ? carPhotos.find((c) => c.title.toLowerCase() === decodedSlug.toLowerCase())
    : undefined;

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center ">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Voiture introuvable</h1>
          <Link href="/vehicules" className="text-blue-600 hover:underline">
             Retour aux véhicules
          </Link>
        </div>
      </div>
    );
  }

  const typeOrTrim =
    car.details.type ?? ((car.details as Record<string, unknown>).trim as string | undefined);
  const equipment = getEquipment(car.category);

  return (
    <div className="min-h-screen bg-gray-100 pt-16 sm:pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">

        
        <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
          <Link href="/" className="hover:text-blue-600 transition">
            Accueil
          </Link>
          <FaChevronRight size={9} />
          <Link href="/vehicules" className="hover:text-blue-600 transition">
            Véhicules
          </Link>
          <FaChevronRight size={9} />
          <span className="text-gray-800 font-medium">{car.details.brand}</span>
        </div>

        
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{car.title}</h1>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              Disponible
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            {typeOrTrim ?? car.category} &bull; {car.details.year} &bull; {car.details.brand}
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        
          <div className="lg:col-span-2 flex flex-col gap-5">

          
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative w-full h-[280px] md:h-[400px]">
                <Image
                  src={car.src}
                  alt={car.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {car.category}
                </span>
              </div>
            </div>

        
            <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MdSpeed className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Kilométrage</p>
                  <p className="font-semibold text-gray-800 text-sm">Sur demande</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MdLocalGasStation className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Carburant</p>
                  <p className="font-semibold text-gray-800 text-sm">Essence</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaRegCalendarAlt className="text-blue-600 text-base" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Année</p>
                  <p className="font-semibold text-gray-800 text-sm">{car.details.year}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-blue-600 text-base" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Garantie</p>
                  <p className="font-semibold text-gray-800 text-sm">3 Mois</p>
                </div>
              </div>
            </div>

  
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3">Description du véhicule</h2>
              <p className="text-gray-500 leading-relaxed text-sm">{car.alt}</p>
            </div>

        
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Équipements &amp; Options</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-2">
                {equipment.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <MdCheckCircle className="text-blue-600 text-lg flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="flex flex-col gap-5">

          
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Call to Action</p>
              <p className="text-2xl font-bold text-gray-900 mb-5">{car.price}</p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition text-sm"
                >
                  <FaWhatsapp size={18} />
                  Contacter sur WhatsApp
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 rounded-xl transition text-sm"
                >
                  <FaPhone size={13} />
                  Appeler le vendeur
                </Link>
              </div>

              
              <div className="mt-6 pt-5 border-t">
                <h3 className="font-semibold text-gray-800 mb-3 text-sm">
                  Planifier un essai
                </h3>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
                  <input
                  type="text"
                  id="name"
                    name="Nom"
                     required placeholder="Dilane Fredil"
                     className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400" />


                  <input
                    type="text"
                    name="data"
                    placeholder="Entrez votre date souhaitée"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre adresse e-mail"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />

               <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-sm text-center transition">
                Planifier l&apos;essai
              </button>


                </form>
              </div>
            </div>

    
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Vendeur Vérifié</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserCheck className="text-white text-xl" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-semibold text-gray-800 text-sm">Triveloce Motors</p>
                    <MdVerified className="text-blue-600 text-base" />
                  </div>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Vendeur certifié . Profil vérifié
                  </p>
                  <p className="text-sm text-gray-400">Transactions sécurisées</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
