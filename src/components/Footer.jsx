import '../assets/styles/Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Remi. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="https://github.com/ton-pseudo" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:ton.email@example.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}
