import PropTypes from "prop-types";
const TestimonialsItem = ({ tImage, desc, position, name }) => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-[11px]  mx-auto bg-[#F8F8F8] rounded-[14px] 2xl:py-[55px] 2xl:pl-[48px] 2xl:pr-[77px] lg:py-3 lg:px-4 p-3">
      <img
        src={tImage}
        alt=""
        className="w-32 h-32 md:w-40 md:h-40 2xl:w-[235px] 2xl:h-[235px] rounded-full"
      />
      <div className="lg:text-left text-center">
        <div>
          <p className="relative text-base 2xl:text-[21px] text-[#424242] leading-[31px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-3 h-3 text-primary"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>

            {desc}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute right-0 w-3 h-3 text-primary"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </p>
        </div>
        <h4 className="md:text-xl 2xl:text-2xl font-medium text-black mt-3">
          {name}
        </h4>
        <h6 className="md:text-base 2xl:text-[19px] font-normal text-black">
          {position}
        </h6>
      </div>
    </div>
  );
};
TestimonialsItem.propTypes = {
  tImage: PropTypes.string,
  position: PropTypes.string,
  desc: PropTypes.string,
  name: PropTypes.string,
};
export default TestimonialsItem;
