import img2 from "../../assets/images/Web Designs (1).png";
import img1 from "../../assets/images/Web Designs.png";
import w4 from "../../assets/images/Web Designs (4).png";
import w5 from "../../assets/images/Web Designs (5).png";
import w1 from "../../assets/images/Web Designs (2).png";
import w2 from "../../assets/images/Web Designs (3).png";
import ProjectItem from "../Shared/ProjectItem/ProjectItem";
const AllProjects = () => {
  return (
    <div className="flex flex-wrap 2xl:flex-nowrap gap-[44px] lg:mt-[50px] mt-7 2xl:mt-[106px]">
      <ProjectItem
        img1={img1}
        img2={img2}
        title="Web Design"
        subtitle="AirCalling Landing Page Design "
      />
      <ProjectItem
        img1={w1}
        img2={w2}
        title="Web Design"
        subtitle="Business Landing Page Design  "
      />
      <ProjectItem
        img1={w4}
        img2={w5}
        title="Web Design"
        subtitle="Ecom Web Page Design  "
      />
    </div>
  );
};

export default AllProjects;
