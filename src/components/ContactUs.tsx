import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";

interface ContactUsProps {
  closeModal: () => void;
}

export const ContactUs = ({ closeModal }: ContactUsProps) => {
  const form = useRef<HTMLFormElement>(null);
  const serviceID = import.meta.env.VITE_API_NAME;
  const templateID = import.meta.env.VITE_API_TEMPLATE;
  const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          serviceID as string,
          templateID as string,
          form.current,
          publicKey as string
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-zinc-800 flex flex-col text-zinc-950 p-6 gap-2 rounded-lg justify-center mx-auto"
      >
        <div className="flex justify-between items-center gap-12 sm:gap-80 text-zinc-50">
          <h2 className="font-bold text-2xl">Entre em contato!</h2>
          <X onClick={closeModal} className="cursor-pointer" />
        </div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-zinc-100 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 bg-transparent mb-2"
          placeholder="Seu nome..."
          required
        />
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-zinc-100 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 bg-transparent mb-2"
          placeholder="exemplo@mail.com"
          required
        />
        <label className="text-zinc-50">Mensagem</label>
        <textarea
          placeholder="Sua mensagem aqui..."
          name="message"
          className="bg-gray-50 border border-gray-300 text-zinc-100 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 bg-transparent resize-none h-20 mb-2"
        />
        <input
          type="submit"
          value="Enviar"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full py-2.5 text-center mb-2 cursor-pointer"
        />
      </form>
    </div>
  );
};
