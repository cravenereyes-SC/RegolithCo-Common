# @regolithco/common

Shared types, utilities, and GraphQL schema for the [Regolith Co.](https://regolith.rocks) mining companion app for Star Citizen.

[![npm version](https://img.shields.io/npm/v/@regolithco/common)](https://www.npmjs.com/package/@regolithco/common)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @regolithco/common
# or
yarn add @regolithco/common
```

## Overview

This package contains:

- **GraphQL schema** — The complete schema used by the Regolith Co. API
- **TypeScript types** — Generated types from the GraphQL schema
- **Utility functions** — Calculations for crew shares, mining yields, loadouts, and more
- **Constants & lookups** — Ore densities, refinery methods, gravity wells, and other game data

## Dual Build

This module ships both CommonJS and ESM builds:

- `dist/` — CommonJS (for Node.js / server-side)
- `dist_esnext/` — ESM (for Vite / browser)

## Development

### Prerequisites

- Node.js 22+ (see `.nvmrc`)
- Yarn 3.6.1 (via Corepack)

### Setup

```bash
corepack enable
yarn install
```

### Scripts

| Command | Description |
|---------|-------------|
| `yarn build` | Build GraphQL types + both CJS and ESM outputs |
| `yarn build:gql` | Regenerate GraphQL types only |
| `yarn test` | Run tests |
| `yarn lint` | Type-check and lint |
| `yarn watch` | Watch mode for both builds |

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE)
