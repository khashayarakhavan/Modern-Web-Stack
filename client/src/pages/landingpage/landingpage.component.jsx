import React from 'react';
import HelloWorld from "../../components/atomic/hello-world/hello-world.component";
import Hero from "../../components/atomic/hero/hero.component";
import SideNav from "../../components/atomic/side-nav/side-nav.component";
import TopRealtors from "../../components/atomic/top-realtors/top-realtors.component";
import { LandingPageContainer } from "./landingpage.styles";

const LandingPage = () => (
  <LandingPageContainer>
    <SideNav />
    <Hero />
    <TopRealtors />
    <HelloWorld />
  </LandingPageContainer>
);

export default LandingPage;
