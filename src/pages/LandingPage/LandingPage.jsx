import React from "react";

import LandingHeader from "@/components/Landing/LandingHeader/LandingHeader";
import LandingMain from "@/components/Landing/LandingMain/LandingMain";

import { LandingPageContainer } from "./LandingPage.styles";

const LandingPage = () => (
	<LandingPageContainer>
		<div className="max-layout">
			<LandingHeader />
			<LandingMain />
		</div>
	</LandingPageContainer>
);

export default LandingPage;
