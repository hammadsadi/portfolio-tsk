import PropTypes from "prop-types";
const ProjectItem = ({ img1, img2, title, subtitle }) => {
  return (
    <div>
      <div className="w-[320px] h-[364px] md:h-[489px] md:w-[445px] bg-[#FFEBDB] relative rounded-xl">
        <img
          src={img1}
          className="md:w-[274px] w-[149px] md:h-[405px] h-[280px] absolute bottom-0 left-[39px] z-10"
          alt=""
        />
        <img
          src={img2}
          alt=""
          className="md:w-[274px] w-[149px] h-[364px] md:h-[489px] absolute right-[27px]"
        />
      </div>
      <div className="text-left 2xl:mt-[37px] lg:mt-4 space-y-1 2xl:space-y-[10px]">
        <p className="text-primary">{title}</p>
        <h3 className="text-lg md:text-2xl leading-[15px] lg:leading-[32px] text-black font-bold">
          {subtitle}
        </h3>
      </div>
    </div>
  );
};
ProjectItem.propTypes = {
  img1: PropTypes.string,
  img2: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default ProjectItem;
