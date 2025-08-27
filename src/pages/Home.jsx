import React, { useState, useEffect } from 'react';
import '../assets/styles/Home.css';
import ermiteGif from '../assets/ermite.gif';

function Home() {
  const [showSmoke, setShowSmoke] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll('.skill-item');
    items.forEach((item) => observer.observe(item));

  const about = document.querySelector('.about-section');
  if (about) observer.observe(about);

    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
      <>
    <section className="home-container">
      <h1 className="home-title">Port-folio Remi</h1>
      <img src={ermiteGif} alt="Perso pixel qui marche" className="pixel-char" />
      <p className="home-subtitle">
        Actuellement en formation de développeur web, j’aime concevoir des interfaces visuelles interactives et réaliser des projets qui donnent vie au code.
      </p>

      <div className="button-group">
        <a href="/projects" className="button">Voir mes projets</a>
        <a href="/cv.pdf" className="button" target="_blank" rel="noopener noreferrer">📄 Voir mon CV</a>
      </div>

      <div className="skills">
        <h2 className="skills-title">Compétences</h2>
        <ul className="skills-list">
        <li className="skill-item">
  <div className="skill-label">
    <span>HTML</span>
    <span className="skill-percent">85%</span>
  </div>
  <div className="skill-bar">
    <div className="fill" style={{ width: '85%' }}></div>
  </div>
  <div className="skill-comment">Bonne maîtrise des balises HTML sémantiques, formulaires, accessibilité et structure.</div>
</li>

            <li className="skill-item">
    <div className="skill-label">
      <span>CSS</span>
      <span className="skill-percent">75%</span>
    </div>
    <div className="skill-bar">
      <div className="fill" style={{ width: '75%' }}></div>
    </div>
    <div className="skill-comment">
      Solide compréhension des sélecteurs, flexbox, grid et responsive design.
    </div>
  </li>

  <li className="skill-item">
    <div className="skill-label">
      <span>JavaScript</span>
      <span className="skill-percent">55%</span>
    </div>
    <div className="skill-bar">
      <div className="fill" style={{ width: '55%' }}></div>
    </div>
    <div className="skill-comment">
      Bases acquises : variables, fonctions, événements, DOM. En progression sur les concepts avancés.
    </div>
  </li>

  <li className="skill-item">
    <div className="skill-label">
      <span>React</span>
      <span className="skill-percent">60%</span>
    </div>
    <div className="skill-bar">
      <div className="fill" style={{ width: '60%' }}></div>
    </div>
    <div className="skill-comment">
      Bonne compréhension des composants, props, hooks de base. À l’aise pour créer des interfaces dynamiques.
    </div>
  </li>

  <li className="skill-item">
    <div className="skill-label">
      <span>Git / GitHub</span>
      <span className="skill-percent">65%</span>
    </div>
    <div className="skill-bar">
      <div className="fill" style={{ width: '65%' }}></div>
    </div>
    <div className="skill-comment">
      Utilisation des commandes essentielles : clone, commit, push, branches. Collaboration basique maîtrisée.
    </div>
  </li>

  <li className="skill-item">
    <div className="skill-label">
      <span>Figma</span>
      <span className="skill-percent">50%</span>
    </div>
    <div className="skill-bar">
      <div className="fill" style={{ width: '50%' }}></div>
    </div>
    <div className="skill-comment">
      Connaissances générales de l’outil : wireframes, composants, prototypage. En cours de consolidation.
    </div>
  </li>

  <li className="skill-item">
    <div className="skill-label">
      <span>SQL / NoSQL</span>
      <span className="skill-percent">90%</span>
    </div>
    <div className="skill-bar">
      <div className="fill" style={{ width: '90%' }}></div>
    </div>
    <div className="skill-comment">
      Très bonne maîtrise des requêtes SQL, jointures, et compréhension des bases NoSQL. Projet validé avec succès.
    </div>
  </li>

  <li className="skill-item">
    <div className="skill-label">
      <span>Anglais (B1)</span>
      <span className="skill-percent">60%</span>
    </div>
    <div className="skill-bar">
      <div className="fill" style={{ width: '60%' }}></div>
    </div>
    <div className="skill-comment">
      Niveau B1 confirmé : compréhension écrite correcte, expression simple mais fonctionnelle.
    </div>
  </li>
</ul>
      </div>
    </section>
    <section className="about-section">
      <h2 className="about-title">À propos de moi</h2>
 <p className="about-text">
  À l’âge de 18 ans, j’ai débuté mon apprentissage du développement avec la plateforme Odin Project, ce qui m’a permis de poser des bases solides en programmation. Par la suite, j’ai intégré une école d’informatique en classe préparatoire durant un an, où j’ai eu l’opportunité d’explorer le développement logiciel, la cybersécurité, ainsi que plusieurs langages populaires du secteur.  
  Animé par une forte affinité pour la création d’interfaces web et interactives, j’ai choisi de me spécialiser dans le développement web en rejoignant le Centre Européen de Formation, avec pour objectif de concevoir des expériences numériques engageantes et accessibles.
</p>

    </section>
  </>
  );
}

export default Home;
