import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useSelector, Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../../src/features/user/user-slice.js";
import ProfileSettings from "../../src/components/MyPage/ProfileSettings";

const store = configureStore({
	reducer: {
		user: userSlice,
	},
});

jest.mock("react-redux", () => ({
	...jest.requireActual("react-redux"),
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe("ProfileSettings", () => {
	beforeEach(() => {
		useSelector.mockImplementation((callback) =>
			callback({
				user: {
					myPageInfo: {
						nickname: "TestUser",
						email: "test@example.com",
						imageUrl: "", // added this line to mock imageUrl
					},
				},
			}),
		);

		render(
			<Provider store={store}>
				<ProfileSettings />
			</Provider>,
		);
	});

	test("renders ProfileSettings component correctly", () => {
		expect(screen.getByText("닉네임")).toBeInTheDocument();
		expect(screen.getByText("이메일")).toBeInTheDocument();
	});

	test("renders input fields with default values", () => {
		expect(screen.getByDisplayValue("TestUser")).toBeInTheDocument();
		expect(screen.getByDisplayValue("test@example.com")).toBeInTheDocument();
	});
});
