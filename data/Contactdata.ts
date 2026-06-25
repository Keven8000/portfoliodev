// Mensagem pré-preenchida simulando como um recrutador/cliente

import { GoNumber } from "react-icons/go";

// naturalmente escreveria após ver o portfólio
const whatsappMessage =
  "Olá, Keven! Acessei o seu portfólio e achei o seu perfil muito interessante. Gostaria de conversar com você sobre algumas oportunidades.";

export type contactType = {
  email: string;
  whatsapp: {
    number: string;
    displayNumber: string;
    url: string;
  },
  linkedin: string;
  github: string;
}

export const contactData: contactType = {
  email: "kevensouza8000@gmail.com",
  whatsapp: {
    number: "5583999614095", // DDI + DDD + Número
    displayNumber: "(83) 99961-4095",
    url: `https://wa.me/5583999614095?text=${encodeURIComponent(whatsappMessage)}`,
  },
  linkedin: "https://www.linkedin.com/in/keven-souza-a24179322/",
  github: "https://github.com/Keven8000",
};