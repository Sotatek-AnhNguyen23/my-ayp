const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    collectCoverageFrom: [
        '**/src/**/*.{js,jsx,ts,tsx}'
    ],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);