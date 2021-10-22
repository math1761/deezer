module.exports = {
    setupFiles: [
        'regenerator-runtime/runtime'
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    verbose: true,
    testMatch: ['**/?(*.)(spec|step).(ts|tsx|js)'],
    collectCoverageFrom: [
        './src/modules/**/*.{ts, tsx, js}'
    ],
    coveragePathIgnorePatterns: ['/node_modules'],
    moduleFileExtensions: ['ts', 'tsx', 'html', 'js'],
    testTimeout: 30000
}