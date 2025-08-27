import { NavLink } from 'react-router-dom'; 
import '../assets/styles/Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav-bar">
          <ul>
            <li><NavLink to="/"   end>Home</NavLink></li>
            <li><NavLink to="/projects">Projets</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
