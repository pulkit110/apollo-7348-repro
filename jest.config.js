module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/dist/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svgr.ts",
    "next/image": "<rootDir>/__mocks__/next-image.tsx"
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  testEnvironment: 'jsdom',
  automock: false
};
