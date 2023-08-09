module.exports = {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.jsx?$": "babel-jest",
		"^.+\\.svg$": "jest-transformer-svg",
	},
	transformIgnorePatterns: [
		"/node_modules/(?!@emotion/react|@emotion/styled|@react-oauth/google|react-icons|react-modal|react-toastify|styled-components)",
	],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@components/(.*)$": "<rootDir>/src/components/$1",
		"^@pages/(.*)$": "<rootDir>/src/pages/$1",
		"^@features/(.*)$": "<rootDir>/src/features/$1",
		"^@store/(.*)$": "<rootDir>/src/store/$1",
		"^@utils/(.*)$": "<rootDir>/src/utils/$1",
		"\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
	},
};
