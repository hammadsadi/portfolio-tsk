import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RxCross1 } from "react-icons/rx";
import NavLinkItem from "../Shared/NavLinkItem/NavLinkItem";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isToggleNav, setIsToggleNav] = useState(false);
  const menuRef = useRef(null);

  const toggleNav = () => {
    setIsToggleNav(!isToggleNav);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsToggleNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="py-2 relative 2xl:mt-[61px]">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="flex items-center gap-5" to="/">
              <img src={logo} alt="" />
              <p className=" text-3xl md:text-5xl leading-[58px] font-motserat">
                <span className="font-bold text-black">M</span>
                <span className="text-[#1E1E1E] font-normal">umair</span>
              </p>
            </Link>
          </div>
{/* Mobile Menue */}
          {/* <nav
            ref={menuRef}
            aria-label="Global"
            className={` xl:hidden transition-transform duration-300 transform ${
              isToggleNav ? "translate-x-0" : "translate-x-full"
            } absolute top-0 right-0 bg-black flex flex-col items-center gap-9 text-white h-screen w-1/2`}
          >
           
            <button className="absolute right-9 top-9" onClick={toggleNav}>
              <RxCross1 size={25} />
            </button>
            <ul className="flex flex-col items-center gap-6 mt-16">
              <NavLinkItem handleMenu={toggleNav} label="Home" dLink="/" />
              <NavLinkItem handleMenu={toggleNav} label="About me" dLink="/" />
              <NavLinkItem handleMenu={toggleNav} label="Services" dLink="/" />
              <NavLinkItem handleMenu={toggleNav} label="Projects" dLink="/" />
              <NavLinkItem handleMenu={toggleNav} label="Testimonials" dLink="/" />
              <NavLinkItem handleMenu={toggleNav} label="Contact" dLink="/" />
            </ul>
            <a
              className="bg-primary w-fit p-[17px] px-[18px] text-[21px] font-normal text-white leading-8 tracking-tighter-[3%] rounded-[5px]"
              href="#"
            >
              Download CV
            </a>
          </nav> */}

          {/* Large Device Menu */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden xl:block">
              <ul className="flex items-center gap-3">
                <NavLinkItem label="Home" dLink="/" />
                <NavLinkItem label="About me" dLink="/" />
                <NavLinkItem label="Services" dLink="/" />
                <NavLinkItem label="Projects" dLink="/" />
                <NavLinkItem label="Testimonials" dLink="/" />
                <NavLinkItem label="Contact" dLink="/" />
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 hidden md:flex">
                <a
                  className="bg-primary py-3 px-5 lg:py-[17px] lg:px-[18px] text-lg 2xl:text-[21px] font-normal text-white leading-8 tracking-tighter-[3%] rounded-[5px]"
                  href="#"
                >
                  Download CV
                </a>
              </div>

              <div className="block xl:hidden">
                <button
                  className="rounded bg-primary p-2 text-white"
                  onClick={toggleNav}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
