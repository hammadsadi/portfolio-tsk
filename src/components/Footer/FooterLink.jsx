import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const FooterLink = ({ dLink, label }) => {
  return (
    <li>
      <Link
        className="text-black font-normal text-base 2xl:text-[21px] leading-8 tracking-tighter-[3%] font-poppin transition hover:text-primary capitalize py-[10px] px-[14px]"
        to={dLink}
      >
        {label}
      </Link>
    </li>
  );
};
FooterLink.propTypes = {
  label: PropTypes.string,
  dLink: PropTypes.string,
};
export default FooterLink;
