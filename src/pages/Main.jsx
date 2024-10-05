import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import Volunteer from "../components/volunteer/Volunteer";
import Service from "../components/service/Service";
import Client from "../components/client/Client";
import DonateBlood from "./DonateBlood";
import BackToTopButton from "../components/BackToTopButton";
import Aboutus from "../components/aboutus/Aboutus";
import Socialicons from "./SocialIcons";
import RequestBlood from "./RequestBood";

const Main = () => {
  const [isDonateFormShow, setIsDonateFormShow] = useState(false);
  const [isRequestFormShow, setIsRequestFormShow] = useState(false);

  return (
    <div>
      <Hero
        setIsDonateFormShow={setIsDonateFormShow}
        isDonateFormShow={isDonateFormShow}
        isRequestFormShow={isRequestFormShow}
        setIsRequestFormShow={setIsRequestFormShow}
      />
      {isDonateFormShow ? (
        <DonateBlood setIsDonateFormShow={setIsDonateFormShow} />
      ) : isRequestFormShow ? (
        <RequestBlood setIsRequestFormShow={setIsRequestFormShow}/>
      ) : (
        <></>
      )}
      <Aboutus />
      <Volunteer />
      <Service />
      <Client />
      <Socialicons />

      <BackToTopButton />
    </div>
  );
};

export default Main;
