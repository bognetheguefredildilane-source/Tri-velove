"use client";
import Image from "next/image";
import { FaCar } from "react-icons/fa";
import { FaR } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


const ContactPage = () => {

   const form = useRef<HTMLFormElement>(null);
   

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const name = form.current.querySelector<HTMLInputElement>('[name="Nom"]')?.value;
    const email = form.current.querySelector<HTMLInputElement>('[name="email"]')?.value;
    // Name validation: at least 8 characters, only letters, spaces, hyphens, apostrophes
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{8,}$/;
    if (!name || !nameRegex.test(name)) {
      alert("Le nom n'est pas valide. Veuillez entrer un nom correct (lettres, espaces, tirets, apostrophes, au moins 8 caractères).");
      return;
    }
    // Standard email regex validation
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      alert("L'adresse email n'est pas valide. Veuillez entrer une adresse email correcte.");
      return;
    }
  
  

    emailjs
      .sendForm("service_r8ywl6v", "template_ph7z6dr", form.current, {
        publicKey: "zB-KfZ_TwxRT8THDz",
      })
      .then(
        () => {
          alert("Message envoyé avec succès !");
          console.log("SUCCESS!");
          // this return the placeholder to the default value after the message is sent
          form.current?.reset();
        },

        (error) => {
          alert("Une erreur s'est produite. Veuillez réessayer.");
          console.log("FAILED...", error.text);
        },
      );
      }

    return (
        <>
     <div className="w-full min-h-screen my-0 sm:my-10 flex flex-col md:flex-row items-center gap-8 md:gap-50">
                <div className="w-full md:w-500 mx-4 md:mx-10">
                    <Image
                        src="/bureau.jpg"
                        alt="Contact Image"
                        width={700}
                        height={1}
                        className="mt-25 md:my-27 rounded-lg shadow-lg bg-cover w-full h-56 sm:h-80 md:h-160 object-cover"

                    />
                </div>
   
   <div className="w-full bg-white flex justify-center">

      <div className="w-full flex-1 flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-50">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Nous-Contactez</h1>
        <p className="text-sm text-gray-600 mb-8">
          Vous avez des questions ou souhaitez en savoir plus sur nos services ?<br />
          N'hésitez pas à nous contacter !
        </p>
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Formulaire de Contact</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-3"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
              <input type="text" id="name"   name="Nom" required placeholder="Dilane Fredil" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required placeholder="dilane.fredil@example.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message"  name="Message" rows={4} required placeholder="Votre message ici..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Envoyer
              </button>
            </div>
          </form>
        </div>
        
      </div>
      </div>
  </div>
        </>
    )
}

export default ContactPage;