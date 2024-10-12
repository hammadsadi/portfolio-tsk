import MyContainer from "../Shared/MyContainer/MyContainer";
import aboutImage from "../../assets/images/about.png";
import "./About.css";
import SkillItem from "../Shared/SkillItem/SkillItem";
const About = () => {
  return (
    <section id="about">
      <MyContainer>
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center mt-10 2xl:mt-[69px]">
          <div className="lg:w-[47%] relative">
            <img src={aboutImage} alt="" />
            <div className="w-[374px] top-[16%] left-[21%] hidden md:flex h-[83px] bg-primary/60 absolute 2xl:top-[110px] 2xl:right-[22%] lg:top-[80px] lg:right-[60px] xl:right-[110px]"></div>
          </div>
          <div className="lg:w-[53%]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[65px] font-semibold text-black lg:leading-[97px]">
              About Me
            </h2>
            <p className="my-2 lg:my-[15px]">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra.
            </p>
            <div className="2xl:space-y-[25px]">
              <SkillItem label="UX" val={90} />
              <SkillItem label="Website Design" val={85} />
              <SkillItem label="App Design" val={95} />
              <SkillItem label="Graphics Design" val={87} />
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default About;
