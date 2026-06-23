
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-center px-10 py-5 bg-white shadow-md text-blue-500">
      

      
      <ul className="flex gap-8 font-semibold"  >
        <a href="#Home">
          {" "}
          <li   className="hover:text-blue-400 hover cursor-pointer font-bold tracking-wide ">
            Home
          </li>
        </a>
        <a href="#About">
          <li className="hover:text-blue-400 cursor-pointer font-bold tracking-wide ">
            About
          </li>
        </a>
        
        <a href="#Projects">
          <li className="hover:text-blue-400 cursor-pointer font-bold tracking-wide ">
            Projects
          </li>
        </a>
        <a href="#Contact">
          <li className="hover:text-blue-400 cursor-pointer font-bold tracking-wide ">
            Contact
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
