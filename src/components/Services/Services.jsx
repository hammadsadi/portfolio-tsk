import MyContainer from "../Shared/MyContainer/MyContainer";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import ServiceItem from "./ServiceItem";
import vc1 from "../../assets/images/Group 18.png";
import webVac from "../../assets/images/web.png";
const Services = () => {
  return (
    <section className="mt-10 xl:mt-16 2xl:mt-[139px]">
      <MyContainer>
        <div>
          <SectionTitle
            title="Services"
            desc="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-[31px] 2xl:mt-[24px]">
            <ServiceItem
              title="UI/UX"
              vactorIcon={vc1}
              desc="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            />
            <ServiceItem
              title="Web Design "
              vactorIcon={webVac}
              desc="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            />
            <ServiceItem
              title="UI/UX"
              vactorIcon={vc1}
              desc="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            />
            <ServiceItem
              title="UI/UX"
              vactorIcon={vc1}
              desc="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            />
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default Services;
