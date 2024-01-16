import React from "react";

import "@testing-library/jest-dom/extend-expect";

import { screen } from "@testing-library/react";

import { render } from "../../jest.setup.js";
import CommunityPage from "../../src/pages/CommunityPage/CommunityPage.jsx";

describe("Community", () => {
	it("test initial render", () => {
		render(<CommunityPage />);

		expect(screen.getByText("내 그룹")).toBeInTheDocument();
		expect(screen.getByText("내 그룹 피드")).toBeInTheDocument();
		expect(screen.getByText("그룹 검색")).toBeInTheDocument();
	});
});
