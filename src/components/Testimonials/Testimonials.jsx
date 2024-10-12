import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyContainer from "../Shared/MyContainer/MyContainer";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import t1 from "../../assets/images/t.png";
import Slider from "react-slick";
import TestimonialsItem from "./TestimonialsItem";
const Testimonials = () => {
  const settings = {
    className: "center",
    dots: true,
    // centerMode: true,
    infinite: true,

    slidesToShow: 1,
    speed: 500,
  };
  return (
    <section className="mt-10 xl:mt-16 2xl:mt-[139px]">
      <MyContainer>
        <SectionTitle
          title="Testimonials"
          desc="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        />
      </MyContainer>
      <div className="lg:mt-10 mt-5 2xl:mt-[72px] max-w-[250px] md:max-w-[600px] mx-auto  lg:max-w-[800px] xl:max-w-[1087px]">
        <MyContainer>
          <Slider {...settings}>
            <div>
              <TestimonialsItem
                tImage={t1}
                desc="Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
                name="Sadi"
                position="CEO"
              />
            </div>
            <div>
              <TestimonialsItem
                tImage={t1}
                desc="Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
                name="Sadi"
                position="Designer"
              />
            </div>
            <div>
              <TestimonialsItem
                tImage={t1}
                desc="Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
                name="Hammad"
                position="Developer"
              />
            </div>
          </Slider>
        </MyContainer>
      </div>
    </section>
  );
};

export default Testimonials;
