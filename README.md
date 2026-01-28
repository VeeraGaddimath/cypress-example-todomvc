# Cypress TypeScript Test Suite

A comprehensive Cypress test automation project with 20+ advanced example test specifications, configured with TypeScript and GitHub Actions CI/CD.

## Project Overview

This project contains:
- **20 Advanced Example Test Files** - Covering various Cypress testing scenarios
- **1 Getting Started Test** - Basic example test case
- **TypeScript Configuration** - Full TypeScript support with strict type checking
- **GitHub Actions CI/CD** - Automated test execution on push/PR and scheduled runs

## Project Structure

```
cypress-example-todomvc/
├── cypress/
│   ├── e2e/
│   │   ├── 1-getting-started/
│   │   │   └── todo.spec.ts
│   │   └── 2-advanced-examples/
│   │       ├── actions.spec.ts
│   │       ├── aliasing.spec.ts
│   │       ├── assertions.spec.ts
│   │       ├── connectors.spec.ts
│   │       ├── cookies.spec.ts
│   │       ├── cypress_api.spec.ts
│   │       ├── files.spec.ts
│   │       ├── location.spec.ts
│   │       ├── misc.spec.ts
│   │       ├── navigation.spec.ts
│   │       ├── network_requests.spec.ts
│   │       ├── querying.spec.ts
│   │       ├── spies_stubs_clocks.spec.ts
│   │       ├── storage.spec.ts
│   │       ├── traversal.spec.ts
│   │       ├── utilities.spec.ts
│   │       ├── viewport.spec.ts
│   │       ├── waiting.spec.ts
│   │       └── window.spec.ts
│   ├── fixtures/
│   │   ├── example.json
│   │   ├── profile.json
│   │   └── users.json
│   └── support/
│       ├── commands.ts
│       └── e2e.ts
├── .github/
│   └── workflows/
│       └── cypress-tests.yml
├── cypress.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── .gitignore
```

## Requirements

- **Node.js** v18.x or v20.x
- **npm** v9.x or higher
- **Cypress** v15.9.0+
- **TypeScript** v5.9.3+

## Installation

1. Clone the repository:
```bash
git clone https://github.com/VeeraGaddimath/cypress-example-todomvc.git
cd cypress-example-todomvc
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

### Run all tests (headless mode)
```bash
npm run test:e2e
```

### Run all tests with visible browser
```bash
npm run test:e2e:headed
```

### Run advanced examples only
```bash
npm run test:e2e:advanced
```

### Open Cypress Test Runner
```bash
npm run test:open
```

## Available NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run test:e2e` | Run all tests in headless mode |
| `npm run test:e2e:headed` | Run all tests with browser UI visible |
| `npm run test:e2e:advanced` | Run advanced examples only |
| `npm run test:open` | Open Cypress interactive mode |

## GitHub Actions CI/CD

This project includes automated testing via GitHub Actions:

### Workflow Features
- **Triggers**: On push, PR, and daily schedule (2 AM UTC)
- **Matrix Testing**: Tests run on Node.js 18.x and 20.x
- **Artifacts**: Screenshots and videos uploaded on test failure
- **Test Reports**: Detailed test execution summaries

### View Results
Visit the [Actions](https://github.com/VeeraGaddimath/cypress-example-todomvc/actions) tab in your GitHub repository to see:
- Test execution status
- Build logs
- Test artifacts (screenshots, videos)
- Execution history

## Configuration Files

### cypress.config.ts
Main Cypress configuration file defining:
- Spec pattern: `**/*.spec.ts`
- Browser settings
- Node event listeners

### tsconfig.json
TypeScript configuration with:
- ES2020 target
- Strict type checking disabled (compatible with legacy test code)
- Cypress and Node.js type definitions

### package.json
Dependencies and scripts for:
- Cypress testing framework
- TypeScript support
- Test execution commands

### .github/workflows/cypress-tests.yml
GitHub Actions workflow for:
- Automated test execution
- Multiple Node.js versions
- Artifact collection and reporting

## Test Examples

### Actions Tests (`actions.spec.ts`)
- Text input with `.type()`
- Focus and blur interactions
- Click events
- Scrolling behavior

### Network Requests (`network_requests.spec.ts`)
- HTTP request interception
- Response mocking
- Request validation

### Storage Tests (`storage.spec.ts`)
- LocalStorage operations
- SessionStorage operations
- Cookie management

### And many more...

## Key Features

✅ **TypeScript Support** - Full type safety for test code
✅ **CI/CD Integration** - Automated testing on GitHub
✅ **Matrix Testing** - Tests run on multiple Node versions
✅ **Artifact Uploads** - Screenshots and videos on failure
✅ **Spec Format** - Modern `.spec.ts` file naming convention
✅ **Lock File** - `package-lock.json` for reproducible builds

## Contributing

1. Create a new branch for your feature
2. Add or modify test files as needed
3. Ensure tests pass locally and in CI/CD
4. Submit a pull request

## License

MIT

## Author

Created by Veera Gaddimath

---

For more information about Cypress, visit [cypress.io](https://www.cypress.io/)
