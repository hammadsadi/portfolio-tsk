import MyContainer from "../Shared/MyContainer/MyContainer";
import aboutImage from "../../assets/images/about.png";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import './About.css'
const About = () => {
 
  return (
    <section>
      <MyContainer>
        <div>
          <div>
            <img src={aboutImage} alt="" />
          </div>
          <div>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra.
            </p>
            <div>
              <div className="flex items-center">
                {/* <RangeSlider
                  className="single-thumb"
                  defaultValue={[0, 50]}
                  thumbsDisabled={[false, false]}
                  rangeSlideDisabled={true}
                /> */}
                <input className="w-full  accent-slate-950" type="range" min='10' max='100' step='10' value={80}/>

                <label for="min-and-max-range-slider-usage" className="sr-only">Example range</label>
<input type="range" class="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
  [&::-webkit-slider-thumb]:w-2.5
  [&::-webkit-slider-thumb]:h-2.5
  [&::-webkit-slider-thumb]:-mt-0.5
  [&::-webkit-slider-thumb]:appearance-none
  [&::-webkit-slider-thumb]:bg-white
  [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
  [&::-webkit-slider-thumb]:rounded-full
  [&::-webkit-slider-thumb]:transition-all
  [&::-webkit-slider-thumb]:duration-150
  [&::-webkit-slider-thumb]:ease-in-out
  [&::-webkit-slider-thumb]:dark:bg-neutral-700

  [&::-moz-range-thumb]:w-2.5
  [&::-moz-range-thumb]:h-2.5
  [&::-moz-range-thumb]:appearance-none
  [&::-moz-range-thumb]:bg-white
  [&::-moz-range-thumb]:border-4
  [&::-moz-range-thumb]:border-blue-600
  [&::-moz-range-thumb]:rounded-full
  [&::-moz-range-thumb]:transition-all
  [&::-moz-range-thumb]:duration-150
  [&::-moz-range-thumb]:ease-in-out

  [&::-webkit-slider-runnable-track]:w-full
  [&::-webkit-slider-runnable-track]:h-2
  [&::-webkit-slider-runnable-track]:bg-gray-100
  [&::-webkit-slider-runnable-track]:rounded-full
  [&::-webkit-slider-runnable-track]:dark:bg-neutral-700

  [&::-moz-range-track]:w-full
  [&::-moz-range-track]:h-2
  [&::-moz-range-track]:bg-gray-100
  [&::-moz-range-track]:rounded-full" id="min-and-max-range-slider-usage" aria-orientation="horizontal" min="0" max="5"></input>

              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default About;
