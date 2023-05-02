// {
//     "testEnvironment": "jsdom",
//     "transform": {
//       "^.+\\.jsx?$": "babel-jest"
//     },
//     "transformIgnorePatterns": [
//       "/node_modules/(?!@emotion/react|@emotion/styled|@react-oauth/google|react-icons|react-modal|react-toastify|styled-components)"
//     ],
//     "setupFilesAfterEnv": [
//       "<rootDir>/jest.setup.js"
//     ],
//     "moduleNameMapper": {
//       "react-calendar/dist/Calendar.css": "<rootDir>/__mocks__/mock.js",
//       "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
//     }
//   }

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@emotion/react|@emotion/styled|@react-oauth/google|react-icons|react-modal|react-toastify|styled-components)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
