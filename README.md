# Micro-Frontend Comparison: Module Federation

This repository demonstrates and compares Module Federation implementations across three different build tools:

- **Vite** - Modern build tool with native ES modules
- **Webpack** - Traditional bundler with mature Module Federation support
- **Rspack** - Rust-based fast bundler with Webpack compatibility

## Architecture

Each workspace contains:
- **Customer App** - Host application that consumes federated modules
- **Supplier App** - Remote application that exposes federated modules
- **Component Library** - Shared UI components (Button component)

## Workspaces

### 1. Vite Workspace (`/vite-workspace`)
- Uses `@originjs/vite-plugin-federation` for Module Federation
- Modern ESM-based approach
- Fast development server

### 2. Webpack Workspace (`/webpack-workspace`)
- Uses native Webpack Module Federation Plugin
- Traditional approach with proven stability
- Comprehensive federation features

### 3. Rspack Workspace (`/rspack-workspace`)
- Uses Rspack's built-in Module Federation support
- Rust-based performance with Webpack compatibility
- Fast builds with familiar configuration

## Federation Setup

- **Supplier App** exposes components at `/supplier/remoteEntry.js`
- **Customer App** consumes supplier components as federated modules
- **Component Library** provides shared Button component

## Getting Started

```bash
# Install dependencies
npm install

# Development - Vite
npm run dev:vite

# Development - Webpack  
npm run dev:webpack

# Development - Rspack
npm run dev:rspack

# Build all workspaces
npm run build:vite
npm run build:webpack
npm run build:rspack
```

## Key Differences

| Feature | Vite | Webpack | Rspack |
|---------|------|---------|--------|
| Build Speed | Fast | Moderate | Very Fast |
| Dev Server | Very Fast | Moderate | Fast |
| Module Federation | Plugin-based | Native | Native |
| Configuration | Simple | Complex | Webpack-compatible |
| Ecosystem | Growing | Mature | Growing |

## Testing Federation

1. Start supplier app (port 4001)
2. Start customer app (port 4000)
3. Customer app loads supplier components dynamically
4. Shared components work across all apps
