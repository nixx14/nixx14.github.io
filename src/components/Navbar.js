import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo-thing.png';

const Navbar = () => {
    return (
        <nav className="navbar has-shadow is-white">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src={logoImage} alt="Logo" style={{maxHeight: 50}} className="py-2 px-2" />
                </Link>
                <button className="navbar-burger" id="burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div className="navbar-menu" id="nav-links">
                <div className="navbar-end">
                    <Link to="/about" className="navbar-item is-hoverable">About me</Link>
                    <Link to="/writings" className="navbar-item">Writing</Link>
                    <Link to="/prototypes" className="navbar-item">Prototypes</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;