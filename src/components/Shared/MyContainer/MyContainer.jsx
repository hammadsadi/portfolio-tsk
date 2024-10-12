import PropTypes from "prop-types";
const MyContainer = ({ children }) => {
  return (
    <section className="container mx-auto px-2 md:px-3 lg:px-0">
      {children}
    </section>
  );
};
MyContainer.propTypes = {
    children: PropTypes.element
}
export default MyContainer;
