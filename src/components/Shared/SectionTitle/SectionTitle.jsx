import PropTypes from "prop-types";
const SectionTitle = ({ title, desc }) => {
  return (
    <div className="text-center max-w-2xl 2xl:max-w-[932px] mx-auto">
      <h2 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-[65px] font-semibold text-black lg:leading-[97px] 2xl:mb-[22px] lg:mb-[18px] mb-[15px]">
        {title}
      </h2>
      <p className="px-6 2xl:px-10">{desc}</p>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default SectionTitle;
