import React from "react";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";

import { render } from "../../jest.setup";
import SettingPage from "../../src/pages/SettingPage/SettingPage";

const mockStore = configureStore([]);

describe("SettingPage Component", () => {
	let store;

	beforeEach(() => {
		store = mockStore({
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
		});
	});

	it("renders without crashing", () => {
		render(
			<Provider store={store}>
				<SettingPage />
			</Provider>,
		);
	});

	it("renders all the tabs", () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<SettingPage />
			</Provider>,
		);

		expect(getByTestId("profileTab")).toBeInTheDocument();
		expect(getByTestId("passwordTab")).toBeInTheDocument();
		expect(getByTestId("withdrawalTab")).toBeInTheDocument();
	});
});
