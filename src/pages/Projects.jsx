import React, { useEffect } from "react";
import "../assets/styles/Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Trouve ton artisan",
      description: "Plateforme de mise en relation avec les artisans de la région Auvergne-Rhône-Alpes. Recherche par nom et catégorie, fiche artisan détaillée, artisans du mois et API sécurisée connectée à MySQL.",
      tech: ["ReactJS", "Sass (SCSS)", "Bootstrap", "Node.js", "Express.js", "Sequelize", "MySQL"],
      link: "https://github.com/Remi-13-exe/trouve-ton-artisan"
    },
    {
      title: "Concevez la base de données pour le site Tifosi",
      description: "Création de la base de données MySQL pour le site Tifosi. Comprend les fichiers de création, d’insertion et de vérification des données.",
      tech: ["MySQL"],
      link: "https://github.com/Remi-13-exe/Concevez-la-base-de-donn-es-pour-le-site-Tifosi-avec-MySQL"
    },
    {
      title: "Créer une API pour le port de plaisance Russel",
      description: "Développement d’une API avec Express et MongoDB pour gérer les inscriptions et les réservations du port de plaisance. Comprend routes, modèles, middlewares et gestion des données.",
      tech: ["JavaScript", "Express.js", "MongoDB", "EJS", "CSS"],
      link: "https://github.com/Remi-13-exe/Creer_une_API_pour_le_port_de_plaisance_Russel"
    },
    {
      title: "Creez votre portfolio avec React.JS",
      description: "Site personnel développé avec React, présentant les compétences, services, réalisations et informations de contact. Comprend pages Accueil, Services, Portfolio, Contact et Mentions légales. Responsive et optimisé SEO.",
      tech: ["React", "React Router", "React Bootstrap", "CSS"],
      link: "https://github.com/Remi-13-exe/Creez-votre-portfolio-avec-React.JS"
    },
    {
      title: "Maquette-Probeats",
      description: "Création d’une maquette interactive et responsive avec Figma, mettant en avant les produits de la marque Probeats. Interface moderne et optimisée pour une navigation fluide, adaptée aux utilisateurs jeunes et mobiles.",
      tech: ["Figma"],
      link: "https://github.com/Remi-13-exe/Maquette-Probeats"
    },
    {
      title: "cv-en-ligne",
      description: "Création d’un CV en ligne validé par le W3C. Site développé en HTML et CSS, entièrement responsive et conforme aux standards web.",
      tech: ["HTML", "CSS"],
      link: "https://github.com/Remi-13-exe/cv-en-ligne"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 } // déclenchement un peu avant l’entrée complète
    );

    // Observer le titre
    const title = document.querySelector(".projects-title");
    if (title) observer.observe(title);

    // Observer toutes les cartes
    const cards = document.querySelectorAll(".project-card");
    cards.forEach(card => observer.observe(card));

    return () => {
      if (title) observer.unobserve(title);
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="projects-container">
      <h1 className="projects-title">Mes Projets</h1>

      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <ul>
              {proj.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
