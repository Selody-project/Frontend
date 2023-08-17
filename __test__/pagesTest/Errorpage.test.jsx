/**
 * @jest-environment jsdom
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import ErrorPage from "../../src/pages/ErrorPage/ErrorPage";

// 에러 페이지 랜더링 테스트
test("renders ErrorPage component", () => {
	render(
		<BrowserRouter>
			<ErrorPage />
		</BrowserRouter>,
	);

	const titleElement = screen.getByText(/404/i);
	expect(titleElement).toBeInTheDocument();

	const descriptionElement = screen.getByText(/Page not found/i);
	expect(descriptionElement).toBeInTheDocument();

	const buttonElement = screen.getByText(/Go to home page/i);
	expect(buttonElement).toBeInTheDocument();
});
