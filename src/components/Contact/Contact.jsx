import MyContainer from "../Shared/MyContainer/MyContainer";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <section className="mt-10 xl:mt-16 2xl:mt-[139px]">
      <div>
        <MyContainer>
          <SectionTitle
            title="Lets Design Together"
            desc="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
          />
          <div className="gap-1 flex justify-center lg:gap-4 xl:gap-[25px] 2xl:mt-[48px] lg:mt-6 mt-3">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="py-1 px-2 rounded-md text-base lg:py-[22px] lg:pl-[26px] w-[200px] lg:w-[400px] xl:w-[627px] bg-[#F8F8F8] border lg:rounded-[14px] outline-none border-[#AFAFAF]"
            />
            <button className="py-1 px-1 rounded-md text-base lg:py-[20px] lg:px-[36px] bg-primary text-white lg:rounded-[14px] lg:text-[24px] font-semibold">
              Contact Me{" "}
            </button>
          </div>
        </MyContainer>
      </div>
    </section>
  );
};

export default Contact;
