import Logo from '../assets/logo-text.png'
function Nav() {
    return (
        <nav>
            <div className="navContainer">
                <img src={Logo} alt="Logo" />
               <div>
                 <ul>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </div>
                <div className="navButton">
                <button>Sign In</button>
                <button>Signup</button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;