import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const NavLinkItem = ({ label, dLink, handleMenu }) => {
  return (
    <li>
      <Link
        className="text-white xl:text-black font-normal text-base 2xl:text-[21px] leading-8 tracking-tighter-[3%] font-poppin transition hover:text-primary capitalize py-[10px] px-[14px]"
        to={dLink}
        onClick={handleMenu}
      >
        {label}
      </Link>
    </li>
  );
};
NavLinkItem.propTypes = {
  label: PropTypes.string,
  dLink: PropTypes.string,
  handleMenu: PropTypes.func
};
export default NavLinkItem
