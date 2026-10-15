import Logo from '../assets/logo-text.png'
function Nav() {
    return (
        <nav>
            <div className=" container mx-auto ">
                <div className="flex justify-between items-center py-4">
                    <button className="block md:hidden ">
                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    <img src={Logo} alt="Logo" />
               <div className="hidden md:flex items-center">
                 <ul className="flex gap-4 items-center ">
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">Technologies</a></li>
                    <li> <a href="#">Projects</a></li>
                    <li> <a href="#">About</a></li>
                    <li> <a href="#">Contact</a></li>
                </ul>
                </div>
                <div className="gap-4 flex items-center">
                <button>Sign In</button>
                <button className="bg-[#D91B7E] text-white px-4 py-2 rounded-full">Signup</button>
                 
                </div>
                    </div>
            </div>
        </nav>
    );
}

export default Nav;