// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import "../assets/styles/Home.css";
import ermiteGif from "../assets/ermite.gif";
import gamabuntaGif from "../assets/gamabunta.gif";
import gamakenGif from "../assets/gamaken.gif";

function Home() {
  const [showSmoke, setShowSmoke] = useState(false);
  const [cvDownloading, setCvDownloading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll(".skill-item");
    items.forEach((item) => observer.observe(item));

    const about = document.querySelector(".about-section");
    if (about) observer.observe(about);

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const handleCvDownload = () => {
    setCvDownloading(true);
    // Simule le téléchargement pour le feedback visuel
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "CV_RemI.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setCvDownloading(false), 1500); // reset après 1,5s
  };

  return (
    <>
      <section className="home-container">
        {/* === Décors fixes === */}
        <img src={gamabuntaGif} alt="Gamabunta" className="deco-gamabunta" />
        <img src={gamakenGif} alt="Gamaken" className="deco-gamaken" />

        <h1 className="home-title">Port-folio Remi</h1>
        <img
          src={ermiteGif}
          alt="Perso pixel qui marche"
          className="pixel-char"
        />
        <p className="home-subtitle">
          Développeur web en formation, je conçois des interfaces interactives et
          réalise des projets variés : sites React responsives, API fonctionnelles,
          bases de données et maquettes design. J’aime transformer des idées en
          expériences numériques concrètes.
        </p>

        <div className="button-group">
          <a href="/projects" className="box-button">
            <div className="button">
              <span>Voir mes projets</span>
            </div>
          </a>

          <div
            className="box-button"
            onClick={handleCvDownload}
            style={{ cursor: "pointer" }}
          >
            <div className="button">
              <span>{cvDownloading ? "Téléchargement…" : "📄 Voir mon CV"}</span>
            </div>
          </div>
        </div>

        <div className="skills">
          <h2 className="skills-title">Compétences</h2>
          <ul className="skills-list">
            {[
              { name: "ReactJS", percent: 65, comment: "Création de projets React complets, composants réutilisables, gestion d’état et navigation avec React Router. Exemple : portfolio interactif et 'Trouve ton artisan'." },
              { name: "Node.js / Express.js", percent: 70, comment: "Développement d’API REST sécurisées, routes, middlewares et gestion des données côté serveur. Exemple : API du port de plaisance Russel." },
              { name: "SQL / MySQL", percent: 85, comment: "Modélisation et gestion de bases de données relationnelles, création de tables, jointures et requêtes avancées. Exemple : site Tifosi et 'Trouve ton artisan'." },
              { name: "MongoDB / NoSQL", percent: 60, comment: "Gestion de collections et documents, intégration avec Express.js pour API non relationnelles. Exemple : port de plaisance Russel." },
              { name: "Figma", percent: 55, comment: "Conception de maquettes interactives et responsive, prototypage d’interfaces modernes pour web et mobile. Exemple : Maquette-Probeats." },
              { name: "HTML / CSS / Sass", percent: 80, comment: "Création de sites statiques ou dynamiques, responsive design et bonnes pratiques de structure. Exemple : CV en ligne et projets React." },
              { name: "Git / GitHub", percent: 65, comment: "Versioning, branches et collaboration sur projets multiples, gestion de repos et intégration continue." },
              { name: "Anglais (B1)", percent: 60, comment: "Capacité à comprendre la documentation technique et à collaborer avec des sources en anglais." },
            ].map((skill, i) => (
              <li key={i} className="skill-item">
                <div className="skill-label">
                  <span>{skill.name}</span>
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div className="fill" style={{ width: `${skill.percent}%` }}></div>
                </div>
                <div className="skill-comment">{skill.comment}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-title">À propos de moi</h2>
        <p className="about-text">
          Passionné par le développement web, j’ai débuté avec Odin Project avant
          d’intégrer une école d’informatique. J’ai acquis des compétences en
          front-end (React, CSS/Sass), back-end (Node.js, Express.js, bases SQL et
          NoSQL) et conception UX/UI avec Figma.  
          Mes projets reflètent cette approche complète : bases de données, API,
          interfaces interactives et responsive design.
        </p>
      </section>
    </>
  );
}

export default Home;
