import PropTypes from "prop-types";
const MyContainer = ({ children }) => {
  return <section className="container mx-auto">{children}</section>;
};
MyContainer.propTypes = {
    children: PropTypes.element
}
export default MyContainer;
