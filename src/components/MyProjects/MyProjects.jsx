import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyContainer from "../Shared/MyContainer/MyContainer";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import WebDesign from "./WebDesign";
import AllProjects from "./AllProjects";
import AppDesign from "./AppDesign";
import GraphicDesign from "./GraphicDesign";
import UiUxDesign from "./UiUxDesign";

const MyProjects = () => {
  return (
    <section className="mt-10 xl:mt-16 2xl:mt-[139px]">
      <MyContainer>
        <SectionTitle
          title="My Projects"
          desc="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        />
        <div className="mt-5 lg:mt-7 2xl:mt-[59px]">
          <Tabs>
            <TabList>
              <Tab>All</Tab>
              <Tab>UI/UX</Tab>
              <Tab>Web Design</Tab>
              <Tab>App Design</Tab>
              <Tab>Graphic Design</Tab>
            </TabList>

            <TabPanel>
              <AllProjects />
            </TabPanel>
            <TabPanel>
              <UiUxDesign />
            </TabPanel>
            <TabPanel>
              <WebDesign />
            </TabPanel>
            <TabPanel>
              <AppDesign />
            </TabPanel>
            <TabPanel>
              <GraphicDesign />
            </TabPanel>
          </Tabs>
        </div>
      </MyContainer>
    </section>
  );
};

export default MyProjects;
