import logoImage from '../assets/logo-thing.png';

const Navbar = () => {
    return (
        <nav className="navbar has-shadow is-white">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src={logoImage} alt="Logo" style={{maxHeight: 50}} className="py-2 px-2"></img>
                </a>
                <a className="navbar-burger" id="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>

            <div className="navbar-menu" id="nav-links">
                <div className="navbar-end">
                    <a href="" className="navbar-item is-hoverable">About me</a>
                    <a href="writings.html" className="navbar-item">Writing</a>
                    <a href="" className="navbar-item">Prototypes</a>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;