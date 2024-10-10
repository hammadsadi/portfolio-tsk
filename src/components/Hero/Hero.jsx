import MyContainer from "../Shared/MyContainer/MyContainer"
import heroImage from '../../assets/images/hero.png'
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";


const Hero = () => {
  return (
    <section>
      <MyContainer>
        <div className="flex md:flex-row flex-col justify-between items-center mt-8 2xl:mt-[120px]">
          <div className="flex-1">
            <h5 className="text-2xl text-black font-semibold mb-1 lg:mb-[6px] text-center md:text-left">
              Hi I am{" "}
            </h5>
            <h4 className="text-[32px] font-semibold text-primary leading-[48px] mb-1 text-center md:text-left">
              Muhammad Umair{" "}
            </h4>
            <h3 className="text-5xl lg:text-[100px] leading-[70px] md:leading-[120px] font-bold text-black text-center md:text-left">
              UI & UX
            </h3>
            <h3 className="text-5xl lg:text-[100px] leading-[70px] md:leading-[120px] font-bold text-black xl:ml-[230px] text-center md:text-left">
              Designer
            </h3>
            <p className="text-lg lg:text-[21px] font-normal mt-4 lg:mt-7 mb-2 lg:mb-[22px] text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <button className=" py-3 px-8 md:py-[17px] md:px-[52px] bg-primary text-white rounded-[5px] font-normal text-lg md:text-[21px] ">
                Hire Me{" "}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-[374px] hidden md:flex h-[83px] bg-primary/60 absolute top-[78px] right-[82px]"></div>
            <img src={heroImage} alt="" className="" />

            <div className="mt-9">
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
          </div>
        </div>
      </MyContainer>
    </section>
  );
}

export default Hero
