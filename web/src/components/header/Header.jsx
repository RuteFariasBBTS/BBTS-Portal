import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleNav = () => setToggleNav(!toggleNav);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = [
    { name: "Conheça a BBTS", link: "https://www.bbts.com.br/" },
    { name: "Parceiros", link: "/parceiros" },
    { name: "Conteúdos", link: "/conteudos" },
  ];

  const dropdownLinks = [
    { name: "Serviços Cyber", link: "/servicos-cyber" },
    { name: "Serviços Phisical", link: "/servicos-phisical" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50 absolute left-0 top-0 w-full bg-[#002D4B] border-b-2 border-[#FCFC30]">
      <div className="max-w-7xl m-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" className="w-full max-w-[280px] object-cover" />
        </Link>

        <div
          className={`'flex w-[100%] items-center z-20 p-2 absolute top-16 left-0 md:flex md:relative md:top-0 md:w-auto lg:bg-none md:bg-transparent bg-[#002D4B] md:shadow-none shadow-md ${
            toggleNav ? "visible" : "hidden"
          } `}
        >
          <div ref={dropdownRef} className="relative">
            <button
              className="flex my-2  gap-2 rounded-md md:m-3 items-center justify-center max-md:pl-10 max-md:text-[#002D4B] max-md:justify-start text-gray-300 w-[100%] md:w-32 md:h-10 h-12 hover:bg-[#41568560] max-md:bg-gradient-to-r max-md:from-[#FCFC30] max-md:to-transparent duration-150"
              onClick={toggleDropdown}
            >
              Serviços
            </button>
            {isOpen && (
              <ul className="md:absolute md:right-0 mt-2 bg-[#002D4B] px-2 rounded shadow-lg">
                {dropdownLinks.map((link) => (
                  <li
                    key={link.link}
                    className=""
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <Link to={link.link} className="flex my-2 gap-2 rounded-md md:m-3 items-center justify-center max-md:text-[#002D4B] max-md:pl-10 max-md:justify-start max-md:bg-gradient-to-r max-md:from-[#FCFC30] max-md:to-transparent  text-white w-[100%] md:w-32 md:h-10 h-12 hover:bg-gray-200 duration-150">{link.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {links.map((link) => (
            <NavLink
              onClick={() => {
                handleToggleNav();
                setIsOpen(false);
              }}
              key={link.link}
              end
              to={link.link}
            >
              <div className="flex my-2 gap-2 rounded-md md:m-3 items-center max-md:pl-10 max-md:text-[#002D4B] max-md:justify-start justify-center text-gray-300 w-[100%] md:w-32 md:h-10 h-12 hover:bg-[#41568560] max-md:bg-gradient-to-r max-md:from-[#FCFC30] max-md:to-transparent duration-150">
                {link.name}
              </div>
            </NavLink>
          ))}
          
        </div>

        <div className="flex md:hidden justify-between items-center gap-3 max-md:ml-10">
          <div className=" w-8 h-8 cursor-pointer flex it bg-blue-200 rounded-md  ">
            <div
              onClick={handleToggleNav}
              className="visible p-1 rounded cursor-pointer text-blue-800"
            >
              {toggleNav ? "x" : "o"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
