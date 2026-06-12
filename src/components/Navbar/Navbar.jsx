// import { useState } from "react";

function Navbar() {
    // const [menu, openMenu] = useState(false);
    // const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white text-blue-500">
      {/* Logo */}
      <span className="text-xl font-bold tracking-wide">MyPortfolio</span>

      {/* Links */}
          <ul className="flex gap-8 font-semibold">
              
       <a href="#Home"> <li className="hover:text-blue-400 cursor-pointer">Home</li></a>
         <a href="#About"><li className="hover:text-blue-400 cursor-pointer">About</li></a>
         <a href="#Skills"><li className="hover:text-blue-400 cursor-pointer">Skills</li></a>
         <a href="#Projects"><li className="hover:text-blue-400 cursor-pointer">Projects</li></a>
        <a href="#Contact"><li className="hover:text-blue-400 cursor-pointer">Contact</li></a>
      </ul>
    </nav>
  );
}

export default Navbar;
