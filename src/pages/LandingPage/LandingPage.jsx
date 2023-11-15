import React from "react";

import LandingHeader from "@/components/Landing/LandingHeader";
import LandingMain from "@/components/Landing/LandingMain";

import { LandingPageContainer } from "./LandingPage.styles";

const LandingPage = () => (
	<LandingPageContainer>
		<LandingHeader />
		<LandingMain />
	</LandingPageContainer>
);

export default LandingPage;
