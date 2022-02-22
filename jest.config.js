module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'js'],
	roots: ['<rootDir>/src'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.js'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	}
}
