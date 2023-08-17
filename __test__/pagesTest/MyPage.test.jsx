import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

import MyPage from "../../src/pages/MyPage/MyPage";

const mockStore = configureStore([]);

describe("MyPage Component", () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			user: {
				user: {
					nickname: "test",
					email: "test@test.com",
					imageUrl: "",
				},
			},
		});
	});

	it("renders without crashing", () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<MyPage />
				</MemoryRouter>
			</Provider>,
		);
	});

	it("renders all the tabs", () => {
		const { getByText } = render(
			<Provider store={store}>
				<MemoryRouter>
					<MyPage />
				</MemoryRouter>
			</Provider>,
		);
		expect(getByText("프로필 및 계정 관리")).toBeInTheDocument();
		expect(getByText("공유일정 및 채팅관리")).toBeInTheDocument();
		expect(getByText("비밀번호 변경")).toBeInTheDocument();
	});
});
