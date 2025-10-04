// src/pages/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // message de confirmation ou erreur

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_b26c37d",      // Service ID
        "template_tukmjwk",     // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "6FIWD6cvnB4w-6w7r"    // User ID
      )
      .then(
        () => {
          setStatus(`Merci ${form.name}, ton message a bien été envoyé !`);
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          setStatus("Erreur lors de l'envoi. Vérifie la configuration EmailJS.");
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-container">
      <h1 className="contact-title">Me Contacter</h1>

      {status && <p className="contact-status">{status}</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>

        <label>
          Email :
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>

        <label>
          Message :
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi…" : "Envoyer"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
