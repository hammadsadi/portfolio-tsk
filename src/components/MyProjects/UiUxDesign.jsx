import img2 from "../../assets/images/Web Designs (1).png";
import img1 from "../../assets/images/Web Designs.png";
import w1 from "../../assets/images/Web Designs (2).png";
import w2 from "../../assets/images/Web Designs (3).png";
import ProjectItem from "../Shared/ProjectItem/ProjectItem";
const UiUxDesign = () => {
  return (
    <div className="flex justify-center items-center flex-wrap 2xl:flex-nowrap gap-[44px] lg:mt-[50px] mt-7 2xl:mt-[106px]">
      <ProjectItem
        img1={img1}
        img2={img2}
        title="UI/UX Design"
        subtitle="AirCalling Landing Page Design "
      />
      <ProjectItem
        img1={w1}
        img2={w2}
        title="UI/UX Design"
        subtitle="Business Landing Page Design  "
      />
    </div>
  );
};

export default UiUxDesign;
