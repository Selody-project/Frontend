import React from "react";

import Landing from "@/components/Landing/Landing";
import LandingHeader from "@/components/Landing/LandingHeader";

import { LandingPageContainer } from "./LandingPage.styles";

const LandingPage = () => (
	<LandingPageContainer>
		<LandingHeader />
		<Landing />
	</LandingPageContainer>
);

export default LandingPage;
