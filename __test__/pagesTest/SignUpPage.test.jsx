/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "../../jest.setup.js";
import "@testing-library/jest-dom";
import SignUpPage from "../../src/pages/SignUpPage";

test("renders SignUpPage without crashing", () => {
	render(<SignUpPage />);
});
