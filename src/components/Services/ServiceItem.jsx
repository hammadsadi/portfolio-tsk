import PropTypes from "prop-types";
const ServiceItem = ({ vactorIcon, title, desc }) => {
  return (
    <div className="text-black p-[18px] bg-[#F8F8F8] rounded-[14px]">
      <img src={vactorIcon} alt="" />
      <h2 className="font-semibold xl:leading-[48px] text-lg  2xl:text-[32px] mt-3 xl:mt-[17px]">
        {title}
      </h2>
      <p className="text-base xl:text-[19px] leading-[28px] tracking-[3%] font-normal mt-2 xl:mt-[15px]">
        {desc}
      </p>
    </div>
  );
};
ServiceItem.propTypes = {
  vactorIcon: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default ServiceItem;
