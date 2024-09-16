import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("", "", form.current, {
          publicKey: "",
        })
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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-zinc-800 flex flex-col text-zinc-950 p-6 gap-2 rounded-lg mx-5 sm:mx-96"
    >
      <h2 className="text-zinc-50 text-center font-bold text-2xl">
        Entre em contato!
      </h2>

      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-white"
      >
        Nome
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Seu nome..."
        required
      />

      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-white"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Seu email..."
        required
      />
      <label className="text-zinc-50">Message</label>
      <textarea name="message" className="px-1" />
      <input
        type="submit"
        value="Send"
        className="bg-zinc-100 hover:bg-zinc-950 hover:text-zinc-50 text-zinc-900 py-1 rounded-md cursor-pointer"
      />
    </form>
  );
};
