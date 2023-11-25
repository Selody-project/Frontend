import React from "react";

import { render } from "../../jest.setup";
import SettingPage from "../../src/pages/SettingPage/SettingPage";

describe("SettingPage Component", () => {
	it("renders without crashing", () => {
		render(<SettingPage />, {
			preloadedState: {
				auth: {
					user: {
						nickname: "test",
						email: "test@test.com",
						imageUrl: "",
					},
				},
				ui: {
					openedModal: "",
				},
				group: {
					groupInfo: { groupId: 1, name: "testGroup" },
				},
			},
		});
	});

	it("renders all the tabs", () => {
		const { getByRole } = render(<SettingPage />, {
			preloadedState: {
				auth: {
					user: {
						nickname: "test",
						email: "test@test.com",
						imageUrl: "",
					},
				},
				ui: {
					openedModal: "",
				},
				group: {
					groupInfo: { groupId: 1, name: "testGroup" },
				},
			},
		});

		expect(getByRole("tab", { name: "profileTab" })).toBeInTheDocument();
		expect(getByRole("tab", { name: "passwordTab" })).toBeInTheDocument();
		expect(getByRole("tab", { name: "withdrawalTab" })).toBeInTheDocument();
	});
});
