import img2 from "../../assets/images/Web Designs (1).png";
import img1 from "../../assets/images/Web Designs.png";

import ProjectItem from "../Shared/ProjectItem/ProjectItem";
const GraphicDesign = () => {
  return (
    <div className="flex flex-wrap 2xl:flex-nowrap gap-[44px] lg:mt-[50px] mt-7 2xl:mt-[106px]">
      <ProjectItem
        img1={img1}
        img2={img2}
        title="Graphic Design"
        subtitle="AirCalling Landing Page Design "
      />
    </div>
  );
};

export default GraphicDesign;
