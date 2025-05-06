module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.integration.[jt]s?(x)', '**/?(*.)+(spec|test).integration.[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/renderer/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }],
  },
};
