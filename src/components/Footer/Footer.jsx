import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
const Footer = () => {
  return (
    <footer>
      <div>
        <Link className="flex items-center gap-5" to="/">
          <img src={logo} alt="" />
          <p className=" text-3xl md:text-5xl leading-[58px] font-motserat">
            <span className="font-bold text-black">M</span>
            <span className="text-[#1E1E1E] font-normal">umair</span>
          </p>
        </Link>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </footer>
  );
}

export default Footer
