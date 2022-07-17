import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ["<rootDir>"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>"],
  transform: {
    "^.+\\.(ts|tsx|jsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/__mocks__/fileMock.js",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "components/(.*)": '<rootDir>src/components/$1',
    "hooks/(.*)": '<rootDir>src/hooks/$1',
  },
  resetMocks: true,
};

export default config;