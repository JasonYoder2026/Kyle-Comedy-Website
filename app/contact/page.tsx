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
      console.log(response);
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
    <section className="max-w-xl mx-auto py-4 px-4">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">
        Contact
      </h1>
      <p className="text-center text-black mb-6">
        Send Kyle a message or question about his comedy shows or upcoming
        events.
      </p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-stone-50 p-4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.40)]">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-black
                 focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-black
                 focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-black
                 focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                 transition resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded font-semibold hover:bg-gray-500 transition block mx-auto"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
      <section className="max-w-xl mx-auto py-12 px-4 text-center">
        <div className="flex justify-center items-center space-x-4">
          <FacebookShareButton
            url={"https://www.facebook.com/share/16MZG5vx1K/?mibextid=wwXIfr"}
          >
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
