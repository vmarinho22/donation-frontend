import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  "testPathIgnorePatterns" : [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/", 
    "<rootDir>/.vscode/",
  ]
};

export default createJestConfig(config);