import PropTypes from "prop-types";
const SkillItem = ({ label, val }) => {
  return (
    <div>
      <label
        htmlFor=""
        className="font-semibold lg:text-lg text-black leading-[36px]  2xl:text-2xl"
      >
        {label}
      </label>
      <input
        className="rounded-lg overflow-hidden appearance-none bg-gray-100 h-[12px] w-full 2xl:mt-2"
        type="range"
        min="1"
        max="100"
        step="1"
        value={val}
      />
    </div>
  );
};
SkillItem.propTypes = {
  label: PropTypes.string,
  val: PropTypes.string,
};
export default SkillItem;
