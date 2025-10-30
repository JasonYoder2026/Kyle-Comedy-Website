"use client";
import { useState } from "react";
import { FacebookIcon, FacebookShareButton } from "next-share";
import { FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_API!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent! Thank you.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  }

  return (
    <section className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" required placeholder="Name" className="w-full p-3 rounded bg-white text-black" />
        <input name="email" type="email" required placeholder="Email" className="w-full p-3 rounded bg-white text-black" />
        <textarea name="message" required placeholder="Message" rows={5} className="w-full p-3 rounded bg-white text-black" />
        <button type="submit" className="bg-black text-white px-6 py-2 rounded font-semibold hover:bg-gray-500 transition block mx-auto">
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
      <section className="max-w-xl mx-auto py-12 px-4 text-center">
        <div className="flex justify-center items-center space-x-4">
        <FacebookShareButton url={"https://www.facebook.com/share/16MZG5vx1K/?mibextid=wwXIfr"}>
          <FacebookIcon size={48} round />
        </FacebookShareButton>
        <a
            href="https://www.instagram.com/capn___karl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition"
        >
            <FaInstagram size={28} />
        </a>
        </div>
      </section>
    </section>
  );
}
