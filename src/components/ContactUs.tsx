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
      <label className="text-zinc-50">Name</label>
      <input type="text" name="name" className="px-1" />
      <label className="text-zinc-50">Email</label>
      <input type="email" name="email" className="px-1" />
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
