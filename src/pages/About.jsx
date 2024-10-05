import React from "react";
import Abouta1 from "./aboutcomponent/Abouta1";
import Abouta from "./aboutcomponent/Abouta";
import Aboutc from "./aboutcomponent/Aboutc";
import Aboutd from "./aboutcomponent/Aboutd";
import Aboute from "./aboutcomponent/Aboute";
import BackToTopButton from "../components/BackToTopButton";
import Campaign2 from "./campaign/Campaign2";
import Socialicons from "./SocialIcons";
const About = () => {
  return (
    <div>
        <Abouta1/>
        <Abouta/>
        <Aboutc/>
        <Aboutd/>
        <Campaign2/>
        <Aboute/>
        <Socialicons/>
        <BackToTopButton />
    </div>
  );
};

export default About;
