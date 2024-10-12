import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterLink from "./FooterLink";
const Footer = () => {
  return (
    <footer className=" bg-[#F8F8F8] mt-10 xl:mt-16 2xl:mt-[139px]">
      <div className="flex justify-center items-center pt-[60px] 2xl:pt-[109px]">
        <Link className="flex items-center gap-2 2xl:gap-5" to="/">
          <img src={logo} alt="" className="w-7 2xl:w-[70px]" />
          <p className=" text-2xl lg:text-5xl leading-[58px] font-motserat">
            <span className="font-bold text-black">M</span>
            <span className="text-[#1E1E1E] font-normal">umair</span>
          </p>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-5 2xl:mt-[69px]">
        <ul className="flex md:flex-row flex-col items-center gap-3 text-black">
          <FooterLink dLink="/" label="Home" />
          <FooterLink label="About me" dLink="/" />
          <FooterLink label="Services" dLink="/" />
          <FooterLink label="Projects" dLink="/" />
          <FooterLink label="Testimonials" dLink="/" />
          <FooterLink label="Contact" dLink="/" />
        </ul>
      </div>
      <div className="2xl:mt-[80px] mt-5">
        <ul className="flex justify-center items-center gap-4 md:gap-6">
          <li>
            <Link to="">
              <FaFacebook className=" text-2xl md:text-[32px]" />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaTwitter className=" text-2xl md:text-[32px]" />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaInstagram className=" text-2xl md:text-[32px]" />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaLinkedin className=" text-2xl md:text-[32px]" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#545454] 2xl:py-[26px] py-4 text-center text-white 2xl:mt-[62px] mt-5">
        <p className="text-white xl:text-[21px] text-sm">
          © 2023 <span className="text-primary">Mumair</span> All Rights
          Reserved , Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer
