import React from "react";
import Campaign1 from "./campaign/Campaign1";
import Counter from "./campaign/Counter";
import Campaign2 from "./campaign/Campaign2";
import BackToTopButton from "../components/BackToTopButton";
import Camopaign3 from "./campaign/Campaign3";
import Client from "../components/client/Client";
import Socialicons from "./SocialIcons";


const Campaign = () => {
  return <div >
    <Campaign1/>
    <Camopaign3/>
    <Campaign2/>
    <Client/>
    <Counter/>
    <Socialicons/>
    <BackToTopButton/>
  </div>;
};

export default Campaign;
