import React from "react";

import { LandingPageContainer } from "./LandingPage.styles";
import LandingHeader from "../../components/Header/LandingHeader";
import Landing from "../../components/Home/Landing";

const LandingPage = () => (
	<LandingPageContainer>
		<LandingHeader />
		<Landing />
	</LandingPageContainer>
);

export default LandingPage;
