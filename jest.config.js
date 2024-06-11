// https://jestjs.io/docs/configuration

module.exports = {
  roots: ["./src"],
  testMatch: ["**/?(*.)+(spec|test).js?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "./coverage",
  testEnvironment: 'jsdom',
  transform: {
      "^.+\\.(ts|tsx)?$": "ts-jest",
      "\\.(js|jsx)?$": "babel-jest",
  },
  collectCoverageFrom: [
      "src/**/*.(js|jsx)",
      "!src/icons/*.(js|jsx)",
      "!src/**/*.stories.(js|jsx)",
      "!**/node_modules/**"
  ],
  moduleNameMapper: {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/fileMock.js",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ['./jest/setup.js'] // Add this line
};
