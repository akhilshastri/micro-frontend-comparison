# Module Federation Implementation Comparison

This document provides a detailed comparison of Module Federation implementations across Vite, Webpack, and Rspack.

## Overview

Each workspace demonstrates the same micro-frontend architecture:
- **Customer App** (Host) - Consumes federated modules
- **Supplier App** (Remote) - Exposes federated modules  
- **UI Components** - Shared component library

## Implementation Details

### 1. Vite Workspace

**Plugin**: `@originjs/vite-plugin-federation`

**Configuration**:
```javascript
// Supplier App (Remote)
federation({
  name: 'supplierApp',
  filename: 'remoteEntry.js',
  exposes: {
    './SupplierComponent': './src/components/SupplierComponent.tsx',
  },
  shared: ['react', 'react-dom']
})

// Customer App (Host)
federation({
  name: 'customerApp',
  remotes: {
    supplierApp: 'http://localhost:4001/supplier/remoteEntry.js',
  },
  shared: ['react', 'react-dom']
})
```

**Ports**: Customer (4000), Supplier (4001)

### 2. Webpack Workspace

**Plugin**: `@module-federation/webpack` (Native)

**Configuration**:
```javascript
// Supplier App (Remote)
new ModuleFederationPlugin({
  name: 'supplierApp',
  filename: 'remoteEntry.js',
  exposes: {
    './SupplierComponent': './src/components/SupplierComponent.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})

// Customer App (Host)
new ModuleFederationPlugin({
  name: 'customerApp',
  remotes: {
    supplierApp: 'supplierApp@http://localhost:5001/supplier/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

**Ports**: Customer (5000), Supplier (5001)

### 3. Rspack Workspace

**Plugin**: `@rspack/core` ModuleFederationPlugin (Built-in)

**Configuration**:
```javascript
// Supplier App (Remote)
new ModuleFederationPlugin({
  name: 'supplierApp',
  filename: 'remoteEntry.js',
  exposes: {
    './SupplierComponent': './src/components/SupplierComponent.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})

// Customer App (Host)
new ModuleFederationPlugin({
  name: 'customerApp',
  remotes: {
    supplierApp: 'supplierApp@http://localhost:6001/supplier/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

**Ports**: Customer (6000), Supplier (6001)

## Key Differences

| Aspect | Vite | Webpack | Rspack |
|--------|------|---------|--------|
| **Setup Complexity** | Medium | High | Medium |
| **Build Speed** | Fast | Moderate | Very Fast |
| **Dev Server Speed** | Very Fast | Moderate | Fast |
| **Module Federation** | Plugin-based | Native | Native |
| **Configuration** | Simple | Complex | Webpack-compatible |
| **TypeScript Support** | Excellent | Good | Excellent |
| **Hot Reload** | Excellent | Good | Excellent |
| **Bundle Size** | Small | Large | Small |
| **Ecosystem Maturity** | Growing | Mature | Growing |

## Federation Context Convention

All supplier apps expose their remote entry at `/supplier/remoteEntry.js`:

- **Vite**: `http://localhost:4001/supplier/remoteEntry.js`
- **Webpack**: `http://localhost:5001/supplier/remoteEntry.js`  
- **Rspack**: `http://localhost:6001/supplier/remoteEntry.js`

This convention-based approach ensures consistent federation URLs across different build tools.

## Performance Comparison

### Build Times (Approximate)
- **Rspack**: ~2-3 seconds
- **Vite**: ~3-5 seconds
- **Webpack**: ~8-12 seconds

### Dev Server Startup
- **Vite**: ~1-2 seconds
- **Rspack**: ~2-3 seconds
- **Webpack**: ~5-8 seconds

### Hot Reload Speed
- **Vite**: ~100-200ms
- **Rspack**: ~200-300ms
- **Webpack**: ~500-1000ms

## Recommendations

### Choose Vite When:
- Building modern applications with ESM
- Prioritizing development experience
- Working with smaller to medium projects
- Need fast hot reload and dev server

### Choose Webpack When:
- Need maximum ecosystem compatibility
- Working with legacy codebases
- Require advanced configuration options
- Building large enterprise applications

### Choose Rspack When:
- Need maximum build performance
- Want Webpack compatibility with better speed
- Building large applications with fast iteration needs
- Migrating from Webpack with minimal config changes

## Getting Started

1. **Install dependencies**: `npm install`
2. **Choose workspace**: Navigate to desired workspace
3. **Start development**: `npm run dev`
4. **Build for production**: `npm run build`

Each workspace is self-contained and can be developed independently.
